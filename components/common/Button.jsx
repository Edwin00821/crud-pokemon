import Link from "next/link";

export default function Button({
  children = "Button",
  type = "button",
  className = "px-6 py-2 mx-2",
  lightMode = "text-white hover:text-white bg-sky-800 hover:bg-sky-600 border-2 border-sky-700 hover:border-sky-600 shadow-md hover:shadow-lg rounded-md hover:transition duration-300 ease-in-out col-span-2",
  darkMode = "dark:text-white dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-2 dark:border-gray-700 dark:hover:border-gray-800 dark:shadow-md dark:hover:shadow-lg dark:rounded-md hodark:ver:transition dark:duration-300 ease-in-out col-span-2",
  movil = "",
  tablet = "",
  desktop = "",
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
              ${className} 
              ${darkMode}
              ${lightMode} 
              ${movil}
              ${tablet}
              ${desktop}`}
    >
      {children}
    </button>
  );
}
