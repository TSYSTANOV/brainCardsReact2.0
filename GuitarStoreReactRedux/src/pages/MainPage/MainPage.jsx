import { withApi } from "../../hoc-helpers/withApi";
import { fetchCategories } from "../../server/api";
import { CategoryItem } from "./CategoryItem";
import styles from "./MainPage.module.css";
function MainPage({ data, reload }) {
  return (
    <section className="category section-offset">
      <div className="container">
        <ul className="category__list">
          {data.map((category) => {
            return (
              <CategoryItem
                category={category}
                key={category.id}
                reload={reload}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default withApi(MainPage, fetchCategories);
