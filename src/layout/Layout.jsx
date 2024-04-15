import { Route, Routes } from "react-router-dom";
import { routes } from "@/routes/routes";
import Header from "../partials/Header";
import { Page } from "./Page";


const Layout = () => {

  return (
    <div className="h-screen">
      <Header />
      <main className="h-[94%] bg-[#EAEDF2]">
        <Routes>
          {routes?.map(page => <Route path={page?.path} key={page?.title} exact={true} element={ <Page page={page} /> } />)}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout;
