import { CardPage } from "../pages/CardPage/CardPage";
import { EditPage } from "../pages/EditPage/EditPage";
import MainPage from "../pages/MainPage/MainPage";

export const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/edit", element: <EditPage /> },
  { path: "/edit/:id", element: <EditPage /> },
  { path: "/card/:id", element: <CardPage /> },
];
