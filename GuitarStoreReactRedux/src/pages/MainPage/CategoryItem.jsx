import { Link } from "react-router-dom";
import { fetchDeleteCategory } from "../../server/api";

function CategoryItem({ category, reload }) {
  const handleDeleteCategory = async () => {
    await fetchDeleteCategory(category.id);
    reload();
  };
  return (
    <li className="category__item">
      <Link to={`/card/${category.id}`}>
        <button className="category__card">
          <span className="category__title">{category.title}</span>
          <span className="category__pairs">{category.length} пар</span>
        </button>
      </Link>
      <Link to={`/edit/${category.id}`}>
        <button
          className="category__btn category__edit"
          aria-label="редактировать"
        ></button>
      </Link>
      <button
        onClick={handleDeleteCategory}
        className="category__btn category__del"
        aria-label="удалить"
      ></button>
    </li>
  );
}
export { CategoryItem };
