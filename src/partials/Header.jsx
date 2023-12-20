import React from 'react';
import Avatar from "../assets/avatar.svg"

export const Header = () => {

  const navbar_main = [
    { title: "Savdo oynasi", icon: "icon" },
    { title: "Bosh menu", icon: "icon" },
    { title: "yordam", icon: "icon" },
  ]

  return (
    <header className='h-[6%] w-full flex justify-center mx-auto px-4'>
      <ul className='w-full h-full flex justify-between items-center'>
        <li className=''>
           <></>                 
        </li>
        <li className='flex items-center'>
          <nav>
            {
              navbar_main.map(nav => <a className='w-4 h-4 m-4' key={nav.title}>{nav.title}</a>)
            }
          </nav>

        </li>
        <li >
          <div className='flex items-center justify-between'>
             <img className='w-8 h-8 border rounded-full' src={Avatar} />
             {/* <select name="" id=""> <option value=""></option> </select> */}
          </div>
        </li>
      </ul>
    </header>
  )
}

export default Header;