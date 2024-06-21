import styles from "./EditPage.module.css";
import { useCategory } from "../../hooks/useCategory";
import { useCategoryControl } from "../../hooks/useCategoryControl";
import { useRef } from "react";
import { Loader } from "../../components/Loader/Loader";
import { RowTable } from "./RowTable";

function EditPage() {
  const titleRef = useRef();
  const tableRef = useRef();
  const { categoryList, categoryTitle, id, loadingCategory, setCategoryList } =
    useCategory();
  const { handleSetCategoryList, loading, deleteRow, cancel, emptyCells } =
    useCategoryControl(id ? false : true);

  return (
    <>
      {loading || loadingCategory ? (
        <Loader />
      ) : (
        <section className="edit section-offset">
          <div className="container edit__container">
            <h2
              className="edit__title"
              contentEditable="true"
              title="Можно редактировать"
              ref={titleRef}
            >
              {categoryTitle ? categoryTitle : "Create new Category"}
            </h2>
            <table className="edit__table table">
              <thead>
                <tr>
                  <th className="table__cell">main</th>
                  <th className="table__cell">second</th>
                  <th className="table__cell"></th>
                </tr>
              </thead>
              <tbody ref={tableRef}>
                {categoryList ? (
                  categoryList.map((el) => {
                    return <RowTable key={el} row={el} deleteRow={deleteRow} />;
                  })
                ) : (
                  <></>
                )}
              </tbody>
            </table>
            <div className="edit__btn-wrapper">
              <button
                className="edit__btn edit__add-row"
                onClick={() => {
                  setCategoryList((prev) => {
                    if (prev) {
                      return [...prev, ["", ""]];
                    } else {
                      return [["", ""]];
                    }
                  });
                }}
              >
                Добавить пару
              </button>
              <button
                className="edit__btn edit__save"
                onClick={() => {
                  handleSetCategoryList(
                    tableRef.current,
                    titleRef.current.innerHTML,
                    id
                  );
                }}
              >
                {categoryTitle
                  ? "Редактировать категорию"
                  : "Сохранить категорию"}
              </button>
              <button className="edit__btn edit__cancel" onClick={cancel}>
                Отмена
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export { EditPage };
