import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import ReportPerformance from '../components/ReportPerformance';

class App extends Component {
    componentDidMount() {
        //this.props.fetchUser();
    }

    isLogin() {
        //return this.props.auth.userId;
    }

    renderHeader() {
        // if (this.isLogin()) {
        //     return <LHeader />;
        // }

        // return '';
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    {this.renderHeader()}
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/reports/performance' component={ReportPerformance} />
                </div>
            </BrowserRouter>
        );
    }
}

// function mapStateToProps(state: any) {
//     return { auth: state.auth };
// }

// export default connect(mapStateToProps, { fetchUser })(App);
export default App;