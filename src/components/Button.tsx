import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white bg-transparent",
    },
  },
});

const button = (
  props: {
    variant: "primary" | "secondary";
  } & HTMLAttributes<HTMLButtonElement>
) => {
  const { variant, className, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant: variant,
        className: className,
      })}
      {...otherProps}
    />
  );
};

export default button;
