/* eslint-disable @typescript-eslint/no-explicit-any */
import {useGetBooksQuery} from "../../rtk/features/book/bookApi";
import {CardItem, CardPlaceholder} from "../shared";

const Home = () => {
  // get books
  const {isLoading, isError, data} = useGetBooksQuery(undefined);

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

  return <>{content}</>;
};

export default Home;
