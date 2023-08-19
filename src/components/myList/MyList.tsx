import {Tabs} from "@mantine/core";
import MyBook from "./myBook/MyBook";
import {useGetWishlistQuery} from "../../rtk/features/wishList/wishApi";
import {useAppSelector} from "../../rtk/hooks/hook";
import ListedBook from "./listedBook/ListedBook";

const Mylist = () => {
  const userId = useAppSelector((state) => state?.auth?.user?._id);
  const {isLoading, isError, data} = useGetWishlistQuery(userId);

  const wishlistData = data?.data?.books?.filter(
    (item) => item.status === "wishlist"
  );
  const currentlyReadData = data?.data?.books?.filter(
    (item) => item.status === "currently reading"
  );

  return (
    <div>
      <Tabs defaultValue="mybooks" color="#228be6a7">
        <Tabs.List color="#228be6a7" variant="pills">
          <Tabs.Tab value="mybooks">My Books</Tabs.Tab>
          <Tabs.Tab value="wishList">Wish List</Tabs.Tab>
          <Tabs.Tab value="currentlyReading">Currenty Reading</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="mybooks" pt="xs">
          <MyBook />
        </Tabs.Panel>

        <Tabs.Panel value="wishList" pt="xs">
          <ListedBook
            data={wishlistData}
            isLoading={isLoading}
            isError={isError}
          />
        </Tabs.Panel>

        <Tabs.Panel value="currentlyReading" pt="xs">
          <ListedBook
            data={currentlyReadData}
            isLoading={isLoading}
            isError={isError}
          />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default Mylist;
