import { Link } from "react-router-dom"

const CreateEmployee = () => {
    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                {/* <a href="employee-list.html">View Current Employees</a> */}
                <Link to={"/employee-list"}>View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name"></input>

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" ></input>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" ></input>

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" ></input>

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number"></input>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>

                {/* <button onClick={saveEmployee()}>Save</button> */}
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </>
    )

}

export default CreateEmployee