import { Link } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import SelectField from "../../components/SelectField/SelectField";
import { useState } from "react";
import DatePickerComponent from "../../components/DatePickerComponent/DatePickerComponent";
import { saveUserReducer } from "../../redux/reducer";
import { useDispatch } from "react-redux";
import { PopUpComponent } from "../../components/PopUpComponent/PopUpComponent";

const CreateEmployee = () => {  
    const [inputValue, setInputValue] = useState({ firstName:"", lastName:"", dateOfBirth:(new Date()), startDate:(new Date()), street:"", city:"", state:"", zipCode:"", department:"" });
    const dispatch = useDispatch();

    const saveEmployee = () => {
        setOpen(true);
        dispatch(saveUserReducer({
            firstName: inputValue.firstName,
            lastName: inputValue.lastName,
            startDate: inputValue.startDate.toLocaleDateString('en-US'),
            department: inputValue.department,
            dateOfBirth: inputValue.dateOfBirth.toLocaleDateString('en-US'),
            street: inputValue.street,
            city: inputValue.city,
            state: inputValue.state,
            zipCode: inputValue.zipCode,
            // users: []
        }));
    }

    const handleSelectState = (e:any) => {
        setInputValue((prev) => ({
            ...prev,
            state: e.value,
        }));
    }
    const handleSelectDepartment = (e:any) => {
        setInputValue((prev) => ({
            ...prev,
            department: e.value,
        }));
    }
    
    const handleBirthDateChange = (e:any) => {
        setInputValue((prev) => ({
            ...prev,
            birthDate: e
        }));
    }
    const handleStartDateChange = (e:any) => {
        setInputValue((prev) => ({
            ...prev,
            startDate: e
        }));
    }

    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
            setInputValue((prev) => ({
                ...prev,
                [name]: value,
            }));
    }

    const [open, setOpen] = useState(false);
    
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
                        name="dateOfBirth"
                        label="Date of Birth"
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
                <button 
                // onClick={{saveEmployee(); setOpen(true);}} 
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => saveEmployee()}
                className="saveButton">Save</button>
                <div>
                    {open ? <PopUpComponent text="Employee Created!" closePopup={() => setOpen(false)} /> : null}
                </div>
            </div>
            {/* <div id="confirmation" className="modal">Employee Created!</div> */}
        </>
    )

}

export default CreateEmployee

