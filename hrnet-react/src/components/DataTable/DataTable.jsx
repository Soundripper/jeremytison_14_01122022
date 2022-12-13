import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useCallback } from "react";
import { useRef } from "react";

const DataTableComp = (props) => {
    const {data} = props;
    const columnDefs = [
        {field: 'make'},
        {field: 'model'},
        {field: 'price'},
        {field: 'make'},
        {field: 'model'},
        {field: 'price'},
        {field: 'make'},
        {field: 'model'},
        {field: 'price'},
      ]

    const defaultColDef = {
        // set filtering on for all columns
        filter: false,
        flex:1,
        resizable: true,
        sortable: true,
        comparator: (valueA , valueB , nodeA , nodeB , isDescending ) => {
        var res = valueA === valueB ? 0 : valueA > valueB ? 1 : -1;
        return res;
        },
    };

    const gridStyle = {height: '100%', width: '100%'};

    const gridRef = useRef();

    const onPageSizeChanged = useCallback(() => {
        var value = (document.getElementById('page-size')).value ;
        gridRef.current.api.paginationSetPageSize(Number(value));
      }, []);
    
    const onFilterTextBoxChanged = useCallback(() => {
        gridRef.current.api.setQuickFilter(
          (document.getElementById('filter-text-box')).value
        );
      }, []);

    return (
        <>
            <div className="dataTable-header">
                Page Size : &nbsp;
                <select onChange={onPageSizeChanged} id="page-size" defaultValue={'10'}>
                    <option value="10" >10</option>
                    <option value="100" >100</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                </select>
                <input
                    className="filterField"
                    type="text"
                    id="filter-text-box"
                    placeholder="Filter..."
                    onInput={() => onFilterTextBoxChanged()}
                />
            </div>

            {/* <table id="employee-table" className="display"></table> */}
            <div className="ag-theme-alpine" style={gridStyle}>
                <AgGridReact
                    ref={gridRef}
                    rowData={data}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    animateRows={true}
                    paginationPageSize={10}
                />
            </div>
            {/* <a href="index.html">Home</a> */}
        </>
    )

}

export default DataTableComp