import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsByCategory from "./pages/NewsByCategory";
import Layout from "./layout/Layout";
import NewsBySearch from "./pages/NewsBySearch";
import NotFoundPage from "./components/NotFoundPage";
// import News from "./pages/News";

function App() {
  // 16 items per page
  // const pagesize = 8;
  const navItems = ["general", "business", "entertainment", "health", "technology", "sports", "science"];

  return (
    <Routes>
      {/* Routes that needs a navbar will need to go as children of this Route component */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {
          navItems.map((item) => {
            return(
              <Route path={item} key={item} element={<NewsByCategory category={item} />} />
            )
          })

          //<Route path="/technology" element={<News key="technology" pageSize={pagesize} country="in" category="technology" /> } />  
        }   
        {
          // <Route path="/shashi" key="shashi" element={<News key="technology" pageSize={pagesize} country="in" category="technology" /> } /> 
        }
        <Route path="/searchResults" element={<NewsBySearch />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
