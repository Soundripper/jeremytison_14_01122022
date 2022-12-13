import { Link } from "react-router-dom"
// import DataTableComp from "../../components/DataTable/DataTable"

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { DataTable } from "../../components/DataTable/DataTable";

const rowData = [
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
  {make: 'Ford', model: 'Focus', price: 40000},
  {make: 'Toyota', model: 'Celica', price: 45000},
  {make: 'BMW', model: '4 Series', price: 50000},
]

const EmployeeList = () => {

    return (
        <div id="employee-div" className="containerEmployeeList" >
            <h2>Current Employees</h2>
            <DataTable data={rowData}/>
            <Link to={"/"} className='homeButton'>Home</Link>
        </ div>
    )

}

export default EmployeeList