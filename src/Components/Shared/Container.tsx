
import type { ReactNode } from "react";


interface Containerprops {
  children?: ReactNode;
  className?: string;
}

const Container: React.FC<Containerprops> = ({ children, className }) => {
  return (
    <div className={`max-w-[1520px] mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container
