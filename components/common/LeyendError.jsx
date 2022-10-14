export default function LeyendError({
    children = 'Label',
    className = 'text-[0.75rem] mt-0 text-[#bb2929] hidden',
    valido
}) {
    return (
        <p className={className}>
            {`${children} ${valido === true && 'hidden'} ${valido === false && 'block'}`}
        </p>
    );
}