import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header({ title }) {
  return (
    <>
      <h1 className="visually-hidden">Brain Cards</h1>
      <header className="header">
        <div className="container header__container">
          <a className="header__logo-link" href="#">
            <img
              className="header__logo"
              src="img/logo.svg"
              alt="Логотип сервиса Brain Cards"
            />
          </a>
          <h2 className="header__subtitle">{title}</h2>
          <Link to={"/edit"}>
            <button className="header__btn">Добавить категорию</button>
          </Link>
        </div>
      </header>
    </>
  );
}
export { Header };
