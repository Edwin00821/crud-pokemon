import { FaTimesCircle } from 'react-icons/fa';
import { classInput } from './../../util/classNames';

export default function Input({
    onChange = () => { },
    onBlur = () => { },
    onKeyUp = () => { },
    type = 'text',
    placeholder = 'placeholder',
    name = 'name',
    value = '',
    required = false,
    disabled = false,
    className =  classInput,
    valid = null,
}) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onKeyUp={onKeyUp}
                className={className}
                disabled={disabled}
                required={required}
            />            
        </>
    );
}