import { Link } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import SelectField from "../../components/SelectField/SelectField";
import DatePicker from "../../components/DatePicker/DatePicker";

const CreateEmployee = () => {    
    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to={"/employee-list"}>View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    {/* <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name"></input> */}
                    <InputField label='First Name' id='firstname' className="label"></InputField>

                    {/* <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" ></input> */}
                    <InputField label='Last Name' id='lastname'></InputField>

                    {/* <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" ></input> */}
                    <DatePicker label="Date of Birth" />

                    {/* <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" ></input> */}
                    <DatePicker label="Start Date" />

                    <fieldset className="address">
                        <legend>Address</legend>

                        {/* <label htmlFor="street">Street</label>
                        <input id="street" type="text" /> */}
                        <InputField label='Street' id='street'></InputField>

                        {/* <label htmlFor="city">City</label>
                        <input id="city" type="text" /> */}
                        <InputField label='City' id='city'></InputField>

                        {/* <label htmlFor="state">State</label>
                        <select name="state" id="state"></select> */}
                        <SelectField data='states' label='State' />

                        {/* <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number"></input> */}
                        <InputField label='Zip Code' id='zip-code'></InputField>
                    </fieldset>

                    {/* <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select> */}
                    <SelectField data='department' label='Department' />
                </form>

                {/* <button onClick={saveEmployee()}>Save</button> */}
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </>
    )

}

export default CreateEmployee

