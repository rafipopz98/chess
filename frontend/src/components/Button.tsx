import { ReactNode } from "react";

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="inline-block text-xl m-4 mt-1 cursor-pointer text-center no-underline text-black uppercase py-3 px-10 rounded transition duration-400"
      style={{
        background: "linear-gradient(90deg,#bfb475 0%,#2c5274 100%)",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
