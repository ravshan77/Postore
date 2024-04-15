import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import 'react-data-grid/lib/styles.css';


class App extends React.Component {


  // componentWillUnmount() {
  //   alert('componentWillUnmount');
  // }
 
  // componentDidCatch(){
  //   alert('componentDidCatch');
  // }

  // componentDidMount(){
  //  alert('componentDidMount');
  // }

  // componentDidUpdate(){
  //   alert('componentDidUpdate');
  // }

  render() {
    return <Layout />;
  }
}


// function App() {
//  let count = 2

//     const pageAccessedByReload = (
//       (window.performance.navigation && window.performance.navigation.type === 2) ||
//         window.performance
//           .getEntriesByType('navigation')
//           .map((nav) => nav.type)
//           .includes('reload')
//     );
    
//     // useEffect(() => {
//       // alert(pageAccessedByReload);
//       if(pageAccessedByReload){
//       localStorage.setItem('pageAccessedByReload', JSON.stringify({count: ++count }) )
        
//       }
//       // localStorage.setItem('pageAccessedByReload', JSON.stringify({ pageAccessedByReload: pageAccessedByReload, count: ++count }) )
//       console.log("lockla ", JSON.parse(localStorage.getItem('pageAccessedByReload')));
//     // },[])
  
//   return (
//     <>
//        <h1 className="text-3xl font-bold underline">Bismillahi rahmani rahim</h1>
//     </>
//   );
// }

export default App;