import { LineMdPlusCircle } from "@/assets/svg/add";
import { createContext, useContext, useMemo, useState } from 'react';
// import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
// import { faker } from '@faker-js/faker';
import { useEffect } from "react";
// import { css } from '@linaria/core';

const rootClassname = {
  display: "flex",
  flexDirection: "column",
  blockSize: "100%",
  gap: "10px",

  "> .rdg": {
    flex: 1,
  }
}

const toolbarClassname = {
  textAlign: "end"
}

const filterColumnClassName = 'filter-cell';

const filterContainerClassname = {
  ".filter-cell": {
    lineHeight: "35px",
    padding: 0,

    "> div": {
      paddingBlock: 0,
      paddingInline: "8px",

      "&:first-child": {
        borderBlockEnd: "1px solid var(--rdg-border-color)"
      }
    }
  }
}

const filterClassname = {
  inlineSize: "100%",
  padding: "4px",
  fontSize: "14px"
}




// Context is needed to read filter values otherwise columns are
// re-created when filters are changed and filter loses focus
const FilterContext = createContext(undefined);

function inputStopPropagation(event) {
  if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
    event.stopPropagation();
  }
}

function selectStopPropagation(event) {
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
    event.stopPropagation();
  }
}



export const Informations = ({ page }) => {
  const [rows, setRows] = useState([]);
  const [filters, setFilters] = useState({ client_name: null, branch_id: null });


  const fetchData = async () => {
    let fetchOptions = { 
      method: 'POST', 
      body: JSON.stringify(filters),
      headers: { 'Authorization': 'Bearer 574|b2Rc0UzfPybAkIQAhDguz5wQ1IGovlD3hRsAZxAg953116c3' }
    }
    const res = await fetch("http://10.100.104.125:4001/api/clients?page=1", fetchOptions).then(res => res.json()).catch(err => alert(err));
    setRows(res.resoult.data);
  }

  
  useEffect(() => {
    fetchData()
  },[filters.branch_id, filters.client_name])

  const columns = useMemo(() => {
    return [
      {
        key: 'id',
        name: 'ID',
        width: 50
      },
      {
        key: 'branch_name',
        name: 'Filial'
      },
      {
        key: 'name',
        name: 'Mijoz',
        headerCellClass: filterColumnClassName,
        renderHeaderCell: (p) => {
          return (
            <FilterRenderer {...p}>
              {({ filters, ...rest }) => (
                <input
                  {...rest}
                  className={filterClassname}
                  value={filters.client_name}
                  onChange={(e) => setFilters( prev => ({ ...prev, client_name: e.target.value })) }
                  onKeyDown={inputStopPropagation}
                />
              )}
            </FilterRenderer>
          )
        }
      },
      {
        key: 'branch_id',
        name: 'Filial ID',
        headerCellClass: filterColumnClassName,
        renderHeaderCell: (p) => (
          <FilterRenderer {...p}>
            {({ filters, ...rest }) => (
              <select
                {...rest}
                className={filterClassname}
                style={{ inlineSize: "100%", padding: "4px", fontSize: "14px" }}
                value={filters.branch_id}
                onChange={(e) => setFilters(prev => ({ ...prev, branch_id: e.target.value })) }
                onKeyDown={selectStopPropagation}
              >
                <option value={null} selected ></option>
                <option value="2">Asosiy Ombor</option>
                <option value="11">Farg'ona</option>
                <option value="12">Andijon</option>
                <option value="3">Farg'ona Ombor</option>
              </select>
            )}
          </FilterRenderer>
        )
      },
    ];
  }, []);



  return (
    <div className="w-full h-full">
      {/* Actions */}
      <div className="container flex border border-red-400">
        <button className="py-[.3rem]"><LineMdPlusCircle width="1.5rem" height="1.5rem"/></button>
        <button className="py-[.3rem] ml-4"><LineMdPlusCircle width="1.5rem" height="1.5rem"/></button>
        <button className="py-[.3rem] ml-4"><LineMdPlusCircle width="1.5rem" height="1.5rem"/></button>
      </div>

      {/* Table */}
      <div className="container ">
        <div style={{ display: "flex", flexDirection: "column", blockSize: "100%", gap: "10px" }}>
          <FilterContext.Provider value={filters}>
            <DataGrid
              // className={filterContainerClassname}
              style={filterContainerClassname}
              // className={filters.enabled ? filterContainerClassname : undefined}
              columns={columns}
              rows={rows}
              headerRowHeight={70}
            />
          </FilterContext.Provider>
        </div>
      </div>
    </div>
  );
};


function FilterRenderer({ tabIndex, column, children }) {
  const filters = useContext(FilterContext);
  return (
    <>
      <div>{column.name}</div>
      <div>{children({ tabIndex, filters })}</div>
    </>
  );
}





// const fetchData = async () => {
//   let fetchOptions = { 
//     method: 'POST', 
//     body: JSON.stringify(filters),
//     headers: { 'Authorization': 'Bearer 574|b2Rc0UzfPybAkIQAhDguz5wQ1IGovlD3hRsAZxAg953116c3' }
//   }
//   const res = await fetch("http://10.100.104.125:4001/api/clients?page=1", fetchOptions).then(res => res.json()).catch(err => alert(err));
//   setRows(res.resoult.data);
// }