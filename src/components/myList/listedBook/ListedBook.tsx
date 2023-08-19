import {CardItem, CardPlaceholder} from "../../shared";
import styles from "./styles.module.css";

const ListedBook = ({data, isLoading, isError}) => {
  let content = null;

  if (isLoading) {
    content = (
      <>
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
      </>
    );
  }

  if (!isLoading && isError) {
    content = "Something went wrong!";
  }
  if (!isLoading && !isError && data?.length === 0) {
    content = "No books found";
  }
  if (!isLoading && !isError && data?.length !== 0) {
    content = data?.map((item: any) => (
      <CardItem data={item?.bookId} key={item?._id} />
    ));
  }

  return (
    <section className={`text-gray-400 body-font`}>
      <div className={`container py-10 mx-auto ${styles.cardContainer}`}>
        {content}
      </div>
    </section>
  );
};

export default ListedBook;
