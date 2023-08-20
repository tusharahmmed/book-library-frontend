/* eslint-disable @typescript-eslint/no-explicit-any */
import {useGetBooksQuery} from "../../rtk/features/book/bookApi";
import {useAppSelector} from "../../rtk/hooks/hook";
import {CardItem, CardPlaceholder} from "../shared";

const Home = () => {
  // get searchTerm
  const {searchTerm} = useAppSelector((state) => state.book);
  // get books
  const {isLoading, isError, data} = useGetBooksQuery(
    {searchTerm},
    {
      refetchOnMountOrArgChange: true,
    }
  );

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
