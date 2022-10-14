import { Children } from "react";

export default function MessageSucces({
    color = '',
    fontSize =  '0',
    children = 'Message Succes',
}){

    return(
        <p className={`${color} ${fontSize}`}>
            {children}
        </p>
    )

}