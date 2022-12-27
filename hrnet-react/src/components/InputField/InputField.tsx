import "../../App.css"
// import { useEffect } from "react"

const InputField = (props:any) => {

    return (
        <div>
            <p className="label">{props.label}</p>
            <input 
                type={props.type}
                value={props.value}
                name={props.name}
                className={props.className}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>  
    )
}

export default InputField