import { Link } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import SelectField from "../../components/SelectField/SelectField";
import { useEffect, useState } from "react";
import DatePickerComponent from "../../components/DatePickerComponent/DatePickerComponent";
import { saveUserReducer } from "../../redux/reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {  
    const [inputValue, setInputValue] = useState({ firstName:"", lastName:"", birthDate:(new Date()), startDate:(new Date()), street:"", city:"", state:"", zipCode:"", department:"" });
    // const { firstName, lastName, birthDate, startDate, street, city, state, zipCode, department } = inputValue;
    const dispatch = useDispatch();

    const saveEmployee = () => {
        dispatch(saveUserReducer({
            firstName: inputValue.firstName,
            lastName: inputValue.lastName,
            birthDate: inputValue.birthDate,
            startDate: inputValue.startDate,
            street: inputValue.street,
            city: inputValue.city,
            state: inputValue.state,
            zipCode: inputValue.zipCode,
            department: inputValue.department,
            users: []
        }));
    }

    const handleSelectState = (e:any) => {
        // console.log(e);
        setInputValue((prev) => ({
            ...prev,
            state: e.value,
        }));
    }
    const handleSelectDepartment = (e:any) => {
        // console.log(e);
        setInputValue((prev) => ({
            ...prev,
            department: e.value,
        }));
    }

    const handleBirthDateChange = (e:any) => {
        setInputValue((prev) => ({
            ...prev,
            birthDate: e.toLocaleDateString('en-US')
        }));
}
    const handleStartDateChange = (e:any) => {
        setInputValue((prev) => ({
            ...prev,
            startDate: e.toLocaleDateString('en-US')
        }));
    }

    const handleInputChange = (event:any) => {
        const { name, value, type, selected } = event.target;
            setInputValue((prev) => ({
                ...prev,
                [name]: value,
            }));
        // }
    }
    
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
                        value={inputValue.firstName}
                        label="First Name"
                        name="firstName"
                        onChange={handleInputChange}>
                    </InputField>
                    
                    <InputField 
                        type="text"
                        value={inputValue.lastName}
                        label="Last Name"
                        name="lastName"
                        onChange={handleInputChange}>
                    </InputField>

                    {/* <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" ></input> */}
                    <DatePickerComponent
                        name="birthDate"
                        label="Birth Date"
                        onClickDay={handleBirthDateChange}
                        // value={inputValue.birthDate}
                    />

                    {/* <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" ></input> */}
                    <DatePickerComponent 
                        name="startDate"
                        label="Start Date"
                        onClickDay={handleStartDateChange}
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <InputField 
                            type="text"
                            value={inputValue.street}
                            label="Street"
                            name="street"
                            onChange={handleInputChange}>
                        </InputField>

                        <InputField 
                            type="text"
                            value={inputValue.city}
                            label="City"
                            name="city"
                            onChange={handleInputChange}>
                        </InputField>

                        <SelectField
                            data='states'
                            label='State'
                            name="state"
                            // getOptionValue={inputValue.state}
                            onChange={handleSelectState}
                        />

                        <InputField 
                            type="number"
                            value={inputValue.zipCode}
                            label="Zip Code"
                            name="zipCode"
                            onChange={handleInputChange}>
                        </InputField>
                    </fieldset>

                    <SelectField
                        data='department'
                        name="department"
                        label='Department' 
                        onChange={handleSelectDepartment}
                    />
                </form>

                <button onClick={saveEmployee}>Save</button>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </>
    )

}

export default CreateEmployee

