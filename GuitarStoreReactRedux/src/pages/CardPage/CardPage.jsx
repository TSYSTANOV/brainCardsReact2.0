import { Loader } from "../../components/Loader/Loader";
import { useCard } from "../../hooks/useCard";
import styles from "./CardPage.module.css";
function CardPage() {
  const { returnBack, loading, list, count, updateCard, activeClass } =
    useCard();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="card section-offset">
          <div className="container card__container">
            <button
              onClick={returnBack}
              className="card__return"
              aria-label="Возврат к категориям"
            ></button>
            <button
              disabled={activeClass}
              className={`card__item ${activeClass}`}
              onClick={updateCard}
            >
              <span className="card__front">{list[count][0]}</span>
              <span className="card__back">{list[count][1]}</span>
            </button>
          </div>
        </section>
      )}
    </>
  );
}
export { CardPage };
