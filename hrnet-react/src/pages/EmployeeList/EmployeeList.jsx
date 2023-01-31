import { Link } from "react-router-dom"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import DataTableComp from "../../components/DataTable/DataTable";
import { useSelector } from "react-redux";
import { resetUsersData } from "../../redux/reducer";
import { useDispatch } from "react-redux";

const EmployeeList = () => {
    const dispatch = useDispatch();

    const usersInfos = useSelector(selectUser => selectUser);

    const resetData = () => {
        dispatch(resetUsersData());
    }

    return (
        <div className="containerEmployeeList">
            <h2>Current Employees</h2>
            <DataTableComp data={usersInfos.saveUserReducer.users}/>
            <Link to={"/"} className='linkClass'>Home</Link>
            <Link to={"/"} className='linkClass' onClick={resetData}>Reset</Link>
        </ div>
    )
}

export default EmployeeList