import { Link } from "react-router-dom"
import DataTable from "../../components/DataTable/DataTable"

const EmployeeList = () => {
    return (
        <>
            <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            {/* <table id="employee-table" className="display"></table> */}
            <DataTable />
            {/* <a href="index.html">Home</a> */}
            <Link to={"/"}>Home</Link>
        </div>
        </>
    )

}

export default EmployeeList