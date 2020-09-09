import "./App.css";

import React from "react";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";

import Main from "./views/Main";
import Notice from "./views//Notice/Notice";
import User from "./views/User/User";
import Shop from "./views/Shop/Shop";
import PageNotFound from "./PageNotFound";

const routes = {
  "/main": <Main />,
  "/notice/*": <Notice />,
  "/user": <User />,
  "/shop": <Shop />,
};

const useRoutes = (routes) => {
  let result = [];

  for (let key in routes) {
    const val = routes[key];
    result.push(<Route path={key} element={val}></Route>);
  }

  // result.push(<Route element={<PageNotFound />} />);
  return <Routes>{result}</Routes>;
};

function App() {
  const routeResult = useRoutes(routes);

  // Switch가 Routes로 변경되면서 무조건 래핑해야 하도록 변경. exact 작동 안함.
  return (
    <div className="App">
      <Router>
        <Link to="/">Main</Link>
        <Link to="/notice">Notice</Link>
        <Link to="/user">User</Link>
        <Link to="/shop">Shop</Link>
        {/* {routeResult} */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/user" element={User}></Route>
          <Route path="/shop" element={Shop}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
