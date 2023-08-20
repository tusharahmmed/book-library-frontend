/* eslint-disable @typescript-eslint/no-explicit-any */
import {useDisclosure} from "@mantine/hooks";
import {Modal, Group} from "@mantine/core";
import AddFrom from "../addForm/AddFrom";
import EditForm from "../editForm/EditForm";

interface modalProps {
  buttonText: string;
  form: "add" | "edit";
  bookData: any;
  title?: string;
}

const WishListModal: React.FC<modalProps> = ({
  buttonText,
  form,
  bookData,
  title,
}) => {
  const [opened, {open, close}] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
        {form === "add" ? (
          <AddFrom data={bookData} close={close} />
        ) : (
          <EditForm data={bookData} title={title as string} close={close} />
        )}
      </Modal>

      <Group>
        <button
          className="inline-flex items-center  bg-[#228BE6] border-0 py-2 px-4 rounded-xl	 focus:outline-none  text-white mt-4 md:mt-0 mr-2"
          onClick={open}>
          {buttonText}
        </button>
      </Group>
    </>
  );
};

export default WishListModal;
