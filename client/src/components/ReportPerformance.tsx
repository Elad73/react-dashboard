import { useState, useEffect } from 'react';
import axios from 'axios';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
// import { fetchReportPerformance } from '../actions';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import 'ag-grid-community/dist/styles/ag-theme-blue.css';
// import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
// import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';

const ReportPerformance = () => {
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        console.log('sending get request to /api/v1/reports/performance');

        axios.get(`/api/v1/reports/performance`).then((res) => {
            setReportData(res.data);
        });
    }, []);

    return (
        <div className='report-container'>
            <h1>Title report</h1>
            <div>This is a report description</div>
            <br />
            <div className='ag-theme-alpine data-view' >
                <AgGridReact reactUi={true } rowData={reportData}>
                    <AgGridColumn field='wid' sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field='uid' filter={ true }></AgGridColumn>
                    <AgGridColumn field='type' sortable={ true } filter={ true } checkboxSelection={true}></AgGridColumn>
                    <AgGridColumn field='message' filter={ true }></AgGridColumn>
                    <AgGridColumn field='location' filter={ true }></AgGridColumn>
                    <AgGridColumn field='hostname' filter={ true }></AgGridColumn>
                    <AgGridColumn field='timestamp' sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field='file_name' filter={ true }></AgGridColumn>
                </AgGridReact>
            </div>
        </div>
    );
};

export default ReportPerformance;
