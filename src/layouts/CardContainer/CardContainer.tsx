import {CardPlaceholder} from "../../components/shared";
import styles from "./styles.module.css";

const CardContainer = () => {
  return (
    <section className={`text-gray-400 body-font`}>
      <div
        className={`container px-5 py-24 mx-auto xl:w-4/5 ${styles.cardContainer}`}>
        {/* content */}
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
      </div>
    </section>
  );
};

export default CardContainer;
