import { memo } from "react";
import {DASHBOARD_PAGE, EXAMPLE_PAGE, INFORMATIONS_PAGE} from "@/constants/index"
import {Dashboard, Example, Informations} from "@/pages";


export const PageController = ({ page }) => {

  
  switch (page?.pageType) {
    case DASHBOARD_PAGE:
      return <Dashboard page={page} />;
    case INFORMATIONS_PAGE:
      return <Informations page={page} />;  
    case EXAMPLE_PAGE:
      return <Example />  
    default:
      return <>404</>;
  }
  
};

export default memo(PageController);