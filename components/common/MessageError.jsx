export default function MessageError({
children,
className = 'h-[2.8125rem] leading-[2.8125rem] bg-[#F66060] rounded-[0.1875rem] py-[1rem]',
}){
    return(
        <div className={className}>
            {children}
        </div>
    )
}