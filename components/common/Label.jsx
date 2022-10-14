import { classLabel } from "../../util/classNames";

export default function Label({
    htmlFor = "name",
    className = classLabel,
    valid = true,
    children = 'Label',
}) {
    return (
        <label htmlFor={htmlFor} className={`${className} ${valid === false &&'text-[#bb2929]'}`} >
            {children}
        </label>
    );
}