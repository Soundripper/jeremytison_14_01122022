import { Link } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import SelectField from "../../components/SelectField/SelectField";
import { useEffect, useState } from "react";
import DatePickerComponent from "../../components/DatePickerComponent/DatePickerComponent";


const CreateEmployee = () => {  
    const [inputValue, setInputValue] = useState({ firstName:"", lastName:"", birthDate:(new Date()), startDate:(new Date()), street:"", city:"", state:"", zipCode:"", department:"" });
    const { firstName, lastName, birthDate, startDate, street, city, state, zipCode, department } = inputValue;

    const handleInputChange = (event:any) => {
        const { name, value, type, selected } = event.target;
        console.log(type);
        if (type === 'date'){
            console.log("date change");
            setInputValue((prev) => ({
                ...prev,
                [selected]: (new Date(value)),
            }));
        }
        else if (type === 'text' || 'number'){
            setInputValue((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    }

    useEffect (() => {
        console.log(inputValue);
    },[inputValue])
    
    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to={"/employee-list"}>View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <InputField 
                        type="text"
                        value={firstName}
                        label="First Name"
                        name="firstName"
                        onChange={handleInputChange}>
                    </InputField>
                    
                    <InputField 
                        type="text"
                        value={lastName}
                        label="Last Name"
                        name="lastName"
                        onChange={handleInputChange}>
                    </InputField>

                    {/* <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" ></input> */}
                    <DatePickerComponent
                        namedField="birthDate"
                        label="Birth Date"
                    />

                    {/* <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" ></input> */}
                    <DatePickerComponent 
                        namedField="startDate"
                        label="Start Date"
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <InputField 
                            type="text"
                            value={street}
                            label="Street"
                            name="street"
                            onChange={handleInputChange}>
                        </InputField>

                        <InputField 
                            type="text"
                            value={city}
                            label="City"
                            name="city"
                            onChange={handleInputChange}>
                        </InputField>

                        <SelectField
                            data='states'
                            label='State'
                        />

                        <InputField 
                            type="number"
                            value={zipCode}
                            label="Zip Code"
                            name="zipCode"
                            onChange={handleInputChange}>
                        </InputField>
                    </fieldset>

                    <SelectField data='department' label='Department' />
                </form>

                {/* <button onClick={saveEmployee()}>Save</button> */}
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </>
    )

}

export default CreateEmployee

