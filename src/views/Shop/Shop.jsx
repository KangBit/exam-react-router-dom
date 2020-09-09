import React from "react";
import { useNavigate } from "react-router-dom";

const Shop = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/notice/subb")}>
        GOTO Notice Sub B
      </button>
    </div>
  );
};

export default Shop;
