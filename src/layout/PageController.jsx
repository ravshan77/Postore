import { memo } from "react";
import {DASHBOARD_PAGE} from "../constants/index"
import Dashboard from "../pages/dashboard/ui/Dashboard";


export const PageController = ({ page }) => {

  
  switch (page?.pageType) {
    case DASHBOARD_PAGE:
      return <Dashboard page={page} />;
    default:
      return <>404</>;
  }
  
};

export default memo(PageController);