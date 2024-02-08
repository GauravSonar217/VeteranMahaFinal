import React from "react";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
      <main>
        <Outlet></Outlet>
      </main>
    </React.Fragment>
  );
}

export default Main;
