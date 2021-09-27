import axios from 'axios';

const FETCH_RPT_PERFORMANCE = 'FETCH_RPT_PERFORMANCE';


export const fetchReportPerformance = () => async (dispatch: any) => {

    // fetching data from server
    console.log('sending get request to /api/v1/reports/performance');
    const res = await axios.get('/api/v1/reports/performance');
    // res = await axios.get(`/api/v1/reports/performance/${customerId}`); --> exmaple with parameter
    
    dispatch({ type: FETCH_RPT_PERFORMANCE, payload: res.data }); 
};

// export const submitReportPerformance = (values: any, history: any) => async (dispatch: any) => {
//     // fetching data from server
//     const res = await axios.post('/api/v1/reports/performance', values);
    
//     // after the request has been over, redirect to the "reports/performance" page.
//     history.push('/reports/performance'); 

//     // dispatching the type with the returned result data
//     dispatch({ type: FETCH_RPT_PERFORMANCE, payload: res.data }); 
// };