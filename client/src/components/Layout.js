import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <main style={{ minHeight: "70vh" }}>{children}</main>
    </div>
  );
};

export default Layout;