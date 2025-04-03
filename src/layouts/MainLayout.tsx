import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, padding: "1rem" }}>{children}</div>
    </div>
  );
};

export default MainLayout;
