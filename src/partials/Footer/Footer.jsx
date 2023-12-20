import React from 'react'

const tabs = [
 {title:"Bosh menyu"},
 {title:"Mahsulot Boshlang'ich kirimi"},
 {title:"Mahsulotlar aylanmasi"},
 {title:"Kassa operatsiyalari ro'yxati"},
 {title:"Kirim"},
 {title:"Mijozlar va Yuk beruvchilar"},
 {title:"Bosh menyu"},
 {title:"Mahsulot Boshlang'ich kirimi"},
 {title:"Mahsulotlar aylanmasi"},
 {title:"Kassa operatsiyalari ro'yxati"},
 {title:"Kirim"},
 {title:"Mijozlar va Yuk beruvchilar"},
 {title:"Bosh menyu"},
 {title:"Mahsulot Boshlang'ich kirimi"},
 {title:"Mahsulotlar aylanmasi"},
 {title:"Kassa operatsiyalari ro'yxati"},
 {title:"Kirim"},
 {title:"Mijozlar va Yuk beruvchilar"}, 
]

const Footer = () => {
  return (
    <footer className="h-[5%] bg-[#4447E2] mx-auto px-4">
        <ul className='flex overflow-x-auto h-full w-full no-scrollbar'>
            {
              tabs.map((tab, i) => {
                return <li key={tab.title} className="flex items-center mr-2  min-w-[200px] max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis h-full text-white bg-[#6467FF] px-2">{tab.title}</li>
              })
            }
        </ul>
    </footer>
  )
}

export default Footer