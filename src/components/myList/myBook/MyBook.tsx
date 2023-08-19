/* eslint-disable @typescript-eslint/no-explicit-any */
import {useGetMyBooksQuery} from "../../../rtk/features/book/bookApi";
import {useAppSelector} from "../../../rtk/hooks/hook";
import {CardItem, CardPlaceholder} from "../../shared";
import styles from "./styles.module.css";

const MyBook = () => {
  const userId = useAppSelector((state) => state?.auth?.user?._id);

  const {isLoading, isError, data} = useGetMyBooksQuery(userId);

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
  if (!isLoading && !isError && data?.data?.length === 0) {
    content = "No books found";
  }
  if (!isLoading && !isError && data?.data?.length !== 0) {
    content = data?.data?.map((item: any) => (
      <CardItem data={item} key={item?._id} />
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

export default MyBook;
