import { Link } from "react-router-dom"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import DataTableComp from "../../components/DataTable/DataTable";
import { useSelector } from "react-redux";
import { resetUsersData } from "../../redux/reducer";
// import { store } from "../../redux/store";
import { useDispatch } from "react-redux";

const EmployeeList = () => {
    const dispatch = useDispatch();
    // const usersInfos = store.getState();
    const usersInfos = useSelector(selectUser => selectUser);
    console.log(usersInfos);

    const resetData = () => {
        dispatch(resetUsersData());
    }

    return (
        <div id="employee-div" className="containerEmployeeList" >
            <h2>Current Employees</h2>
            <DataTableComp data={usersInfos.saveUserReducer.users}/>
            <Link to={"/"} className='homeButton'>Home</Link>
            <Link to={"/"} className='resetButton' onClick={resetData}>Reset</Link>
        </ div>
    )
}

export default EmployeeList