import {Tabs} from "@mantine/core";
import MyBook from "./myBook/MyBook";

const Mylist = () => {
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
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="currentlyReading" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default Mylist;
