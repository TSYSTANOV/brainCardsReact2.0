import { useEffect, useState } from "react";
import { fetchCards } from "../server/api";
import { useParams } from "react-router-dom";

export const useCategory = () => {
  const { id } = useParams();
  const [loadingCategory, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState(null);
  useEffect(() => {
    if (id) {
      (async () => {
        const res = await fetchCards(id);
        setCategoryList(res.pairs);
        setCategoryTitle(res.title);
        setLoading(false);
      })();
    } else {
      setLoading(false);
    }
  }, []);
  return { categoryList, categoryTitle, loadingCategory, id, setCategoryList };
};
