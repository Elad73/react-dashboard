import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
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
    gridApi: any[];
    columnApi: any[];
}

class ReportDemo extends Component<{}, ReportState> {
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
                    field: 'wid',
                    filter: true,
                },
                {
                    field: 'uid',
                    filter: true,
                },
                {
                    field: 'type',
                    filter: true,
                },

                {
                    field: 'message',
                    filter: true,
                },
                {
                    field: 'location',
                    filter: true,
                },
                {
                    field: 'hostname',
                    filter: 'agNumberColumnFilter',
                },
                {
                    field: 'timestamp',
                    sortable: true,
                    filter: 'agNumberColumnFilter',
                },
                {
                    field: 'file_name',
                    sortable: true,
                    filter: true,
                },
            ],
            defaultColDef: {
                flex: 1,
                minWidth: 200,
                resizable: true,
                floatingFilter: true,
            },
            rowData: [],
            gridApi: [],
            columnApi: [],
        };
    }

    onGridReady = (params: any) => {
        // this.gridApi = params.api;
        // this.gridColumnApi = params.columnApi;

        const updateData = (data: any) => {
            this.setState({
                rowData: data,
                gridApi: params.api,
                columnApi: params.columnApi,
            });
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
            <div className='report-container'>
                <h1>Title report</h1>
                <div>This is a report description</div>
                <br />
                <div className='ag-theme-alpine data-view' >
                    <AgGridReact
                        // these are bound props, so can use anything in React state or props
                        modules={this.state.modules}
                        columnDefs={this.state.columnDefs}
                        defaultColDef={this.state.defaultColDef}
                        rowData={this.state.rowData}
                        // inside onGridReady, you receive the grid APIs if you want them
                        onGridReady={this.onGridReady}
                    />
                </div>
            </div>
        );
    }
}

export default ReportDemo;
