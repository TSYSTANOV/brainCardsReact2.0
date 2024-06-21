import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useState } from "react";
import { fetchCategories } from "../server/api";

function AppRouter() {
  const [headerTitle, setHeadertitle] = useState("Категории");

  return (
    <>
      <Header title={headerTitle} />
      <main id="app">
        <Outlet />
      </main>
    </>
  );
}
export { AppRouter };
