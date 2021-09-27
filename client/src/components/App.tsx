import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import ReportPerformance from '../components/ReportPerformance';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/reports/performance' component={ReportPerformance} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;