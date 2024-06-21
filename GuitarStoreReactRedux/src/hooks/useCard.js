import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCards } from "../server/api";

export const useCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [activeClass, setActiveClass] = useState("");
  const returnBack = () => {
    navigate("/");
  };
  const updateCard = () => {
    setActiveClass("card__item_flipped");
    setTimeout(() => {
      setActiveClass("");
      setTimeout(() => {
        if (count < list.length - 1) {
          setCount(count + 1);
        } else {
          setCount(count + 1);
          setList((prev) => {
            return [...prev, ["The end", ""]];
          });
          setTimeout(() => {
            navigate("/");
          }, 200);
        }
      }, 100);
    }, 1000);
  };
  useEffect(() => {
    (async () => {
      const res = await fetchCards(id);
      setList(res.pairs);
      setLoading(false);
    })();
  }, [id]);
  return { returnBack, loading, list, count, updateCard, activeClass };
};
