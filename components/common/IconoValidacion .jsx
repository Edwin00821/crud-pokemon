import { FaTimesCircle } from "react-icons/fa";

export default function IconoValidacion({
  valido = true,
  className = "absolute right-[.625rem] bottom-[.875rem] z-100 text-base text-[#bb2929] opacity-0",
  ...props
}) {
  return (
    <FaTimesCircle
      className={`${className} ${valido === false && <FaTimesCircle />}`}
      size={16}
    >
      {valido === true && <FaTimesCircle />}
    </FaTimesCircle>
  );
}
