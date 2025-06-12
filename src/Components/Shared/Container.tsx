import type { ReactNode } from "react";

interface Containerprops {
  children?: ReactNode;
  className?: string;
}

const Container: React.FC<Containerprops> = ({ children, className }) => {
  return (
    <div
      className={`max-w-[1450px] mx-auto 2xl:max-w-[1680px] overflow-x-hidden ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
