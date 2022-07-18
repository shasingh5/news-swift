import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsByCategory from "./pages/NewsByCategory";
import Layout from "./layout/Layout";
import NewsBySearch from "./pages/NewsBySearch";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <Routes>
      {/* Routes that needs a navbar will need to go as children of this Route component */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:category" element={<NewsByCategory />} />
        <Route path="/searchResults" element={<NewsBySearch />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
