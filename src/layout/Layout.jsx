import { Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";
import PageController from "./PageController";
import Header from "../partials/Header";
import Footer from "../partials/Footer/Footer";

const Layout = () => {

  return (
    <div className="h-screen relative flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <header className="h-[4%] bg-[#4447E2] mx-auto px-4 text-white">Mahsulot boshlang’ich qoldig’i kiritish xujjatlari ro’yxati</header>
        <main className="h-[85%] mx-auto px-4 bg-[#EAEDF2]">
          <Routes>
              {routes?.map(page => {
                return <Route path={page?.path} key={page?.title} exact={true} element={ <PageController page={page} /> } />
              })}  
          </Routes>
        </main>
        <Footer />
    </div>
  );};

export default Layout;
