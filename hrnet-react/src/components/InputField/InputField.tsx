import "../../App.css"

const InputField = (props:any) => {
    return (
        <div>
            <p className="label">{props.label}</p> <input type="text" />
        </div>  
    )
}

export default InputField