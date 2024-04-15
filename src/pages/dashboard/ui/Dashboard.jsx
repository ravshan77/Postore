import { BRANCH_PATH, CLIENT_PATH } from "@/constants"
import { NavLink } from "react-router-dom"


export const Dashboard = ({page}) => {

  return (
    <section className="flex items-center justify-center p-[50px] px-[90px] h-full">
      <div className="w-full h-full flex bg-white rounded-lg justify-around">
        
        <div className="w-[30%]">
          <h1 className="text-center my-4 text-lg font-medium text-[#4447E2]">Xisobotlar</h1>
          <ul>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Shartnomalar</li> </NavLink>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Mijozlar</li> </NavLink>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Mahsulot qoldig'i</li> </NavLink>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Kassa hisoboti</li> </NavLink>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Mahsulot aylanmasi</li> </NavLink>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Boshqa hisobotlar</li> </NavLink>
          </ul>
        </div>

        <div className="w-[30%]">
          <h1 className="text-center my-4 text-lg font-medium text-[#4447E2]">Xujjatlar</h1>
          <ul>
            <NavLink to={BRANCH_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Shartnomalar</li> </NavLink>
            <NavLink to={BRANCH_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Mijozlar</li> </NavLink>
            <NavLink to={BRANCH_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Kassa hisoboti</li> </NavLink>
            <NavLink to={BRANCH_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Kassa hisoboti</li> </NavLink>
            <NavLink to={BRANCH_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Mahsulot aylanmasi</li> </NavLink>
            <NavLink to={BRANCH_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Boshqa hisobotlar</li> </NavLink>
          </ul>
        </div>

        <div className="w-[30%]">
          <h1 className="text-center my-4 text-lg font-medium text-[#4447E2]">Ma'lumotlar</h1>
          <ul>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Shartnomalar</li> </NavLink>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Mijozlar</li> </NavLink>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Kassa hisoboti</li> </NavLink>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Kassa hisoboti</li> </NavLink>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Mahsulot aylanmasi</li> </NavLink>
            <NavLink to={CLIENT_PATH} > <li className="bg-[#4447E2] text-white min-h-[60px] flex items-center justify-start pl-10 rounded-lg my-4">Boshqa hisobotlar</li> </NavLink>
          </ul>
        </div>

      </div>
    </section>
  )
}