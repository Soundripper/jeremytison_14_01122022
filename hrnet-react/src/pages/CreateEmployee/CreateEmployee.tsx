import { Link } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import SelectField from "../../components/SelectField/SelectField";
import { useState } from "react";
import DatePickerComponent from "../../components/DatePickerComponent/DatePickerComponent";
import { saveUserReducer } from "../../redux/reducer";
import { useDispatch } from "react-redux";
import { PopUpModalComponent } from "react-simplemodal-component";
import { validName, validZipCode } from "../../utils/regex";

const CreateEmployee = () => {  
    const [inputValue, setInputValue] = useState({ firstName:"", lastName:"", dateOfBirth:(new Date()), startDate:(new Date()), street:"", city:"", state:"", zipCode:"", department:"" });
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);
    const [modalText, setModalText] = useState("");
    
    const saveEmployee = () => {
        console.log("Button save pressed");
        if (!validName.test(inputValue.firstName) || !validName.test(inputValue.lastName) || !validName.test(inputValue.street) || !validName.test(inputValue.city) || (inputValue.state === "") || (inputValue.department === "") || !validZipCode.test(inputValue.zipCode) ) {
            setModalText("Verify your entries!");
            setOpenModal(true);
            return;
        }
        else {
            setModalText("Employee created");
            setOpenModal(true);
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
        
    }

    const handleChange = (name, value) => {
        setInputValue((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    
    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link className="linkClass" to={"/employee-list"}>View Current Employees</Link>
                <h3>Create Employee</h3>
                <form action="#" id="create-employee">
                    <InputField 
                        className="inputField"
                        type="text"
                        value={inputValue.firstName}
                        label="First Name"
                        name="firstName"
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        >
                    </InputField>
                    
                    <InputField 
                        className="inputField"
                        type="text"
                        value={inputValue.lastName}
                        label="Last Name"
                        name="lastName"
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        >
                    </InputField>

                    <DatePickerComponent
                        name="dateOfBirth"
                        label="Date of Birth"
                        onClickDay={(e) => handleChange('dateOfBirth', e)}
                    />

                    <DatePickerComponent 
                        name="startDate"
                        label="Start Date"
                        onClickDay={(e) => handleChange('startDate', e)}
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <InputField 
                            type="text"
                            value={inputValue.street}
                            label="Street"
                            name="street"
                            onChange={(e) => handleChange('street', e.target.value)}
                            >
                        </InputField>

                        <InputField 
                            type="text"
                            value={inputValue.city}
                            label="City"
                            name="city"
                            onChange={(e) => handleChange('city', e.target.value)}
                            >
                        </InputField>

                        <SelectField
                            data='states'
                            label='State'
                            name="state"
                            onChange={(e) => handleChange('state', e.value)}
                        />

                        <InputField 
                            type="number"
                            value={inputValue.zipCode}
                            label="Zip Code"
                            name="zipCode"
                            onChange={(e) => handleChange('zipCode', e.target.value)}
                            >
                        </InputField>
                    </fieldset>

                    <SelectField
                        data='department'
                        name="department"
                        label='Department' 
                        onChange={(e) => handleChange('department', e.value)}
                    />
                </form>
                <button onClick={() => saveEmployee()} className="saveButton">Save</button>
                <div>
                    <PopUpModalComponent
                    myPopupBodyStyle={{borderRadius: "10px", backgroundColor: 'rgba(220, 220, 220, 0.8)',}}
                    myPopupContainerStyle={{backgroundColor: "rgba(40, 40, 40, 0.5)"}}
                    myPopupCloseButtonStyle={{backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "50px", position:"absolute", right: "-10px", top:"-10px"}}
                    fadeanimduration="1s"
                    openModal={openModal}
                    text={modalText}
                    closePopup={() => setOpenModal(false)}
                    />
                </div>
            </div>
        </>
    )

}

export default CreateEmployee

