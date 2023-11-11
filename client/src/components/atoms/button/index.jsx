import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "@/components/atoms";
import { Fragment } from "react";

export const Button = (props) => {
  const { loading } = props;
  const className = clsx(
    "font-medium text-sm px-12 py-2.5 text-center text-white ",
    "focus:ring-4 focus:outline-none focus:ring-blue-300 ",
    "w-full sm:w-auto rounded-lg",
    {
      "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":
        props.variant === "primary",
    },
    {
      "bg-green-400 hover:bg-green-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700":
        props.variant === "secondary",
    },
    props.className,
  );

  return (
    <Fragment>
      {props.href ? (
        <Link to={props.href}>
          <button {...props} className={className}>
            {loading ? <LoadingSpinner /> : props.children}
          </button>
        </Link>
      ) : (
        <button {...props} className={className}>
          {loading ? <LoadingSpinner /> : props.children}
        </button>
      )}
    </Fragment>
  );
};
