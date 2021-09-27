import { useState, useEffect } from 'react';
import axios from 'axios';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import 'ag-grid-community/dist/styles/ag-theme-blue.css';

const ReportDemo = () => {
    const [reportData, setReportData] = useState([]);

    // useEffect(() => {
    //     console.log('sending get request to /api/v1/reports/performance');

    //     axios.get(`/api/v1/reports/performance`).then((res) => {
    //         setReportData(res.data);
    //     });
    // }, []);

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]);

    const onGridReady = (params: any) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        const updateData = (data: any) => {
            setRowData(data);
        };

        // fetch(`/api/v1/reports/performance`)
        //     .then((resp) => JSON.stringify(resp))
        //     .then((data) => updateData(data));

        axios.get(`/api/v1/reports/performance`).then((res) => {
            updateData(res.data);
        });
    };

    return (
        <div className='card'>
            <div
                className='report-container'
                style={{ width: '100%', height: '100%' }}
            >
                <h1>Title report</h1>
                <div>This is a report description</div>
                <br />
                <div
                    id='myGrid'
                    className='ag-theme-alpine data-view'
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <AgGridReact
                        defaultColDef={{
                            flex: 1,
                            minWidth: 150,
                            resizable: true,
                            filter: true,
                        }}
                        onGridReady={onGridReady}
                        rowData={rowData}
                    >
                        <AgGridColumn
                            field='wid'
                            sortable={true}
                            filter={'agNumberColumnFilter'}
                            filterParams={{
                                buttons: ['apply', 'reset'],
                                closeOnApply: true,
                            }}
                        ></AgGridColumn>
                        <AgGridColumn
                            field='uid'
                            filter={'agNumberColumnFilter'}
                        ></AgGridColumn>
                        <AgGridColumn
                            field='type'
                            sortable={true}
                            filter={'agTextColumnFilter'}
                            filterParams={{ buttons: ['reset', 'apply'] }}
                            checkboxSelection={true}
                        ></AgGridColumn>
                        <AgGridColumn
                            field='message'
                            filter={true}
                        ></AgGridColumn>
                        <AgGridColumn
                            field='location'
                            filter={true}
                        ></AgGridColumn>
                        <AgGridColumn
                            field='hostname'
                            filter={'agSetColumnFilter'}
                            filterParams={{ buttons: ['clear', 'apply'] }}
                        ></AgGridColumn>
                        <AgGridColumn
                            field='timestamp'
                            sortable={true}
                            filter={true}
                        ></AgGridColumn>
                        <AgGridColumn
                            field='file_name'
                            filter={'agSetColumnFilter'}
                        ></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        </div>
    );
};

export default ReportDemo;
