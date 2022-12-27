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
        }));
    }

    const handleChange = (name:any, value:any) => {
        setInputValue((prev) => ({
            ...prev,
            [name]: value
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
                        onChange={(e:any) => handleChange('firstName', e.target.value)}
                        >
                    </InputField>
                    
                    <InputField 
                        type="text"
                        value={inputValue.lastName}
                        label="Last Name"
                        name="lastName"
                        onChange={(e:any) => handleChange('lastName', e.target.value)}
                        >
                    </InputField>

                    <DatePickerComponent
                        name="dateOfBirth"
                        label="Date of Birth"
                        onClickDay={(e:any) => handleChange('dateOfBirth', e)}
                    />

                    <DatePickerComponent 
                        name="startDate"
                        label="Start Date"
                        onClickDay={(e:any) => handleChange('startDate', e)}
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <InputField 
                            type="text"
                            value={inputValue.street}
                            label="Street"
                            name="street"
                            onChange={(e:any) => handleChange('street', e.target.value)}
                            >
                        </InputField>

                        <InputField 
                            type="text"
                            value={inputValue.city}
                            label="City"
                            name="city"
                            onChange={(e:any) => handleChange('city', e.target.value)}
                            >
                        </InputField>

                        <SelectField
                            data='states'
                            label='State'
                            name="state"
                            onChange={(e:any) => handleChange('state', e.value)}
                        />

                        <InputField 
                            type="number"
                            value={inputValue.zipCode}
                            label="Zip Code"
                            name="zipCode"
                            onChange={(e:any) => handleChange('zipCode', e.target.value)}
                            >
                        </InputField>
                    </fieldset>

                    <SelectField
                        data='department'
                        name="department"
                        label='Department' 
                        onChange={(e:any) => handleChange('department', e.value)}
                    />
                </form>
                <button 
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => saveEmployee()}
                className="saveButton">Save</button>
                <div>
                    {open ? <PopUpComponent text="Employee Created!" closePopup={() => setOpen(false)} /> : null}
                </div>
            </div>
        </>
    )

}

export default CreateEmployee

