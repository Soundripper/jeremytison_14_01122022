import { Link } from "react-router-dom"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import DataTableComp from "../../components/DataTable/DataTable";
import { store } from "../../redux/reducer";

// const rowData = [
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
//   {make: 'Ford', model: 'Focus', price: 40000},
//   {make: 'Toyota', model: 'Celica', price: 45000},
//   {make: 'BMW', model: '4 Series', price: 50000},
// ]

const EmployeeList = () => {
    const usersInfos = store.getState();
    console.log(usersInfos.saveUserReducer.users);

    return (
        <div id="employee-div" className="containerEmployeeList" >
            <h2>Current Employees</h2>
            <DataTableComp data={usersInfos.saveUserReducer.users}/>
            <Link to={"/"} className='homeButton'>Home</Link>
        </ div>
    )

}

export default EmployeeList