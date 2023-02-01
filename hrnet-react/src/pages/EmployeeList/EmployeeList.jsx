import { Link } from "react-router-dom"
import { lazy, Suspense } from "react"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useSelector } from "react-redux";
import { resetUsersData } from "../../redux/reducer";
import { useDispatch } from "react-redux";

const DataTableCompLazy = lazy(() => import("../../components/DataTable/DataTable"))

const EmployeeList = () => {
    const dispatch = useDispatch();

    const usersInfos = useSelector(selectUser => selectUser);

    const resetData = () => {
        dispatch(resetUsersData());
    }

    return (
        <div className="containerEmployeeList">
            <h2>Current Employees</h2>
            <Suspense fallback={<h1>Loading....</h1>}>
                <DataTableCompLazy data={usersInfos.saveUserReducer.users}/>
            </Suspense>
            <Link to={"/"} className='linkClass'>Home</Link>
            <Link to={"/"} className='linkClass' onClick={resetData}>Reset</Link>
        </ div>
    )
}

export default EmployeeList