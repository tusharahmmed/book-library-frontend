import {ReactNode} from "react";

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({children}) => {
  return (
    <section className={`text-gray-400 body-font`}>
      <div className={`container px-5 py-24 mx-auto xl:w-4/5 `}>{children}</div>
    </section>
  );
};

export default ContentContainer;
