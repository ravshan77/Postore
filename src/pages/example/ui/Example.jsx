import { LineMdPlusCircle } from "@/assets/svg/add";
import React, { useState, useCallback, useRef } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'
import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter'
import { data, defaultFilterValue } from "@/pages/example/data";
import { rowStyle, shouldComponentUpdate, loadData } from "../functions";
import { useEffect } from "react";
const gridStyle = { minHeight: 600, marginTop: 10 };



export const Example = ({ page }) => {
  const [dataSource2, setDataSource] = useState([]);
  const [filterValue, setFilterValue] = useState(defaultFilterValue[0]);
  const [sortInfo, setSortInfo] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [gridRef, setGridRef] = useState(null);
  const [searchText, setSearchText] = useState('');

  let searchTextRef = useRef(searchText);
  searchTextRef.current = searchText;


  useEffect( () => {
    (async () => {
      try {
        const {data} = await loadData({ skip, limit, sortInfo, filterValue }).then( res => res)
        setDataSource(data)
      } catch (err) {
        console.log('Error occured when fetching books');
      }
    })();
  },[skip, limit, sortInfo, JSON.stringify(filterValue), searchText])



  /* ----------------- Sortda fetch qilish mumkin ----------------- */
  const sortHandle = useCallback((value) => console.log(value), [])

  /* ----- Search qilib ranglar orqali belgilatish va fetch qilish mumkin ----- */
  const onSearchChange = ({ target: { value } }) => {
    const visibleColumns = gridRef.current.visibleColumns;  // 
    setSearchText(value)
    setFilterValue({name: "firstName", operator: "contains", type:"string", value: value })
//  {name: "firstName", operator: "contains", type:"string", value: "" }
  }

  /* --------------- search qilganda rangini o'zgartirish uhchun -------------- */
  const render = ({ value }) => {
    const lowerSearchText = searchTextRef.current.toLowerCase();

    if (!lowerSearchText) return value;

    const str = value + ''; // get string value
    const v = str.toLowerCase(); // our search is case insensitive
    const index = v.indexOf(lowerSearchText);

    if (index === -1) return value;

    return [
      <span key="before">{str.slice(0, index)}</span>,
      <span key="match" style={{ background: 'yellow', fontWeight: 'bold' }}>
        {str.slice(index, index + lowerSearchText.length)}
      </span>,
      <span key="after">{str.slice(index + lowerSearchText.length)}</span>,
    ];
  };

  /* ------------------ Double clickda rowni ishlatish mumkin ----------------- */
  const onRowDoubleClick = useCallback((_, p) => console.log(p.data) , [])


  /* -------------------- Context Menuni boshqarish mumkin -------------------- */
  const renderRowContextMenu = useCallback((menuProps, { rowProps, cellProps }) => {
    menuProps.items = menuProps.items.concat([
      {
        label: 'Delete ' + "[ " + rowProps.data.firstName +" ]",
        onClick: () => {
          console.log(rowProps.data);
          menuProps.onDismiss();
        },
      },
      {
        label: 'Another custom menu item',
        onClick: () => {
          menuProps.onDismiss();
        },
      },
    ]);
  }, []);


  const columns = [
    { name: 'id', header: 'Id', type: 'number', defaultWidth: 60, render, shouldComponentUpdate, },
    { name: 'name', header: 'First Name', defaultFlex: 1, enableColumnFilterContextMenu: false, render, shouldComponentUpdate },
    { name: 'lastName', header: 'Last Name', defaultFlex: 1, render, shouldComponentUpdate },
    { name: 'phone', header: 'Phone',  defaultFlex: 1,  type: 'number', filterEditor: NumberFilter, render, shouldComponentUpdate },
    { name: 'createdOn', header: 'Create at', defaultFlex: 1, render, shouldComponentUpdate },
    { name: 'email', header: 'Email', defaultFlex: 1, render, shouldComponentUpdate }
  ];


  const dataSource = useCallback(loadData, [])


  return (
    <div className="w-full h-full">
      {/* Actions */}
      <div className="container flex border justify-between h-12 border-red-400">
        <div className="flex items-center">
          <button className="border border-red-500 w-8 h-8"> <LineMdPlusCircle width="2rem" height="2rem"/></button>
          <button className="border border-red-500 w-8 h-8 ml-4"><LineMdPlusCircle width="2rem" height="2rem"/></button>
          <button className="border border-red-500 w-8 h-8 ml-4"><LineMdPlusCircle width="2rem" height="2rem"/></button>
        </div>
        <div className="flex items-center w-1/6">
          <input value={searchText} onChange={onSearchChange} className="w-full h-8 outline-none border-[#ddd]  hover:border hover:border-[#7986cb] shadow-inner focus:border-2 focus:border-[#7986cb]" size={"1"} type="search" name="" id="" />
        </div>
      </div>

      {/* Table */}
      <div className="container ">
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        renderRowContextMenu={renderRowContextMenu}
        pagination
        rowStyle={rowStyle}
        handle={setGridRef}
        scrollThreshold={0.9}
        enableColumnFilterContextMenu={false}
        enableSelection={true} // row tanlanganda ajralib turuvchi rang bilan belgilanib turadi bosilganligini bilish uchun, false xolatda faqat border bo'yalib turadi
        onRowDoubleClick={onRowDoubleClick}  // (event: MouseEvent, rowProps: { rowIndex: number; remoteRowIndex?: number; realIndex?: number; groupProps?: any; data: any; empty?: boolean; columns?: TypeComputedColumn[]; dataSourceArray?: any[]; }) => void;
        dataSource={dataSource2} // [] 
        onFilterValueChange={setFilterValue} // (filterValue: { name: string; type: string; operator: string; value: any; emptyValue?: any; fn?: (arg: any) => any; getFilterValue?: Function; active?: boolean; }) => void;
        onSortInfoChange={sortHandle} // (sortInfo: { dir: 1 | -1 | 0; name: string; id?: string; type?: string; fn?: Function; columnName?: string; }) => void;
        onLimitChange={setLimit}  // (limit: number) => void;
        onSkipChange={setSkip} // (skip: number) => void;
        limit={limit} // number
        skip={skip} // number
        defaultLimit={10}
        defaultFilterValue={defaultFilterValue}
        // livePagination
        // defaultSortInfo={defaultSortInfo}
      />
      </div>
    </div>
  );
};
