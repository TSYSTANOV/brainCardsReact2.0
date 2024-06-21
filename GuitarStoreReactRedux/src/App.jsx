import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { AppRouter } from "./routes/AppRouter";
import MainPage from "./pages/MainPage/MainPage";
import { EditPage } from "./pages/EditPage/EditPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRouter />}>
          {routes.map(({ path, element }) => {
            return <Route path={path} element={element} key={path} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
