import { useEffect, useRef, useState } from "react";
import { fetchCreateCategory, fetchEditCategory } from "../server/api";
import { useNavigate } from "react-router-dom";
import { RowTable } from "../pages/EditPage/RowTable";
import { ToastContainer, toast } from "react-toastify";

export const useCategoryControl = (isNew = false) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const idParam = useRef();
  const titleParam = useRef();
  const emptyCells = useRef();

  const notifyEmptyCells = () =>
    toast.warn("Заполните пустые все строчки", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyEnterData = () =>
    toast.warn("Введите данные новой категории", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const handleSetCategoryList = (table, title, id) => {
    idParam.current = id;
    titleParam.current = title;
    emptyCells.current = false;
    const data = Array.from(table.children).map((tr) => {
      if (
        tr.children[0].innerHTML.length === 0 ||
        tr.children[1].innerHTML.length === 0
      ) {
        emptyCells.current = true;
      }
      return [tr.children[0].innerHTML, tr.children[1].innerHTML];
    });
    setCategoryList(data);
    if (!data.length) {
      notifyEnterData();
    }
  };
  const deleteRow = (e) => {
    e.target.closest("tr").remove();
  };
  const cancel = (e) => {
    navigate("/");
  };

  useEffect(() => {
    if (categoryList.length) {
      if (!emptyCells.current) {
        if (isNew) {
          (async () => {
            setLoading(true);
            const res = await fetchCreateCategory({
              title: titleParam.current,
              pairs: categoryList,
            });
            setLoading(false);
            navigate("/");
          })();
        } else {
          (async () => {
            setLoading(true);
            const res = await fetchEditCategory(idParam.current, {
              id: idParam.current,
              title: titleParam.current,
              pairs: categoryList,
            });
            setLoading(false);
            navigate("/");
          })();
        }
      } else {
        notifyEmptyCells();
      }
    }
  }, [categoryList]);

  return { handleSetCategoryList, loading, deleteRow, cancel, emptyCells };
};
