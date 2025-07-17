import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Avatar = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children } = props;

  return (
    <div
      className={twMerge(
        "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Avatar;
