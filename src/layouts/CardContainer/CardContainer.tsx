import {ReactNode} from "react";
import styles from "./styles.module.css";

interface CardContainerProps {
  children: ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({children}) => {
  return (
    <section className={`text-gray-400 body-font`}>
      <div
        className={`container px-5 py-24 mx-auto xl:w-4/5 ${styles.cardContainer}`}>
        {children}
      </div>
    </section>
  );
};

export default CardContainer;
