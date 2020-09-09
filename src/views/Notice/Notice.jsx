import React, { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import NoticeSubA from "./NoticeSubA";
import NoticeSubB from "./NoticeSubB";
import NoticeSubC from "./NoticeSubC";

const Notice = (props) => {
  useEffect(() => {
    console.log("init Notice");
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <div>DIV</div>
      <Link to="/notice/suba">SubA</Link>
      <Link to="/notice/subb">SubB</Link>
      <Link to="/notice/subc">SubC</Link>
      <Routes>
        <Route path="/suba" element={<NoticeSubA />}></Route>
        <Route path="/subb" element={<NoticeSubB />}></Route>
        <Route path="/subc" element={<NoticeSubC />}></Route>
      </Routes>
    </div>
  );
};

export default Notice;
