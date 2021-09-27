import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact} from 'ag-grid-react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

interface ReportState {
    modules: any[]; //replace any with suitable type
    columnDefs: any[];
    defaultColDef: {};
    rowData: any[];
}
  
class ReportPerformance extends Component<{}, ReportState > {
    constructor(props: any) {
        super(props);

        this.state = {
            modules: [
                ClientSideRowModelModule,
                SetFilterModule,
                MenuModule,
                ColumnsToolPanelModule,
            ],
            columnDefs: [
                {
                    field: 'uid',
                    filter: true,
                },
                {
                    field: 'wid',
                    filter: 'agSetColumnFilter',
                },
                {
                    field: 'hostname',
                    filter: 'agNumberColumnFilter',
                },
            ],
            defaultColDef: {
                flex: 1,
                minWidth: 200,
                resizable: true,
                floatingFilter: true,
            },
            rowData: [],
        };
    }

    onGridReady = (params: any) => {
        // this.gridApi = params.api;
        // this.gridColumnApi = params.columnApi;

        const updateData = (data: any) => {
            this.setState({ rowData: data });
        };

        // fetch('http://localhost:3000/reports/performance')
        //     .then((resp) => resp.json())
        //     .then((data) => updateData(data));

        axios.get(`/api/v1/reports/performance`).then((res) => {
            updateData(res.data);
        });
    };

    render() {
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
                            modules={this.state.modules}
                            columnDefs={this.state.columnDefs}
                            defaultColDef={this.state.defaultColDef}
                            onGridReady={this.onGridReady}
                            rowData={this.state.rowData}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ReportPerformance;
