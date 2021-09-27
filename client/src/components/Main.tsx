import ReportPerformance from './ReportPerformance';
import ReportDemo from './ReportDemo';

function Main() {
    return (
        <main className='main '>
            <div className='main_overview'>
                <div className='overview_card'>
                    <div className='overview_card-info'>Overview</div>
                    <div className='overview_card-icon'>Card</div>
                </div>
                <div className='overview_card'>
                    <div className='overview_card-info'>Overview</div>
                    <div className='overview_card-icon'>Card</div>
                </div>
                <div className='overview_card'>
                    <div className='overview_card-info'>Overview</div>
                    <div className='overview_card-icon'>Card</div>
                </div>
                <div className='overview_card'>
                    <div className='overview_card-info'>Overview</div>
                    <div className='overview_card-icon'>Card</div>
                </div>
            </div>

            <div className='main_cards'>
                <ReportDemo />
                <div className='card'>Card</div>
                <div className='card'>Card</div>
            </div>
        </main>
    );
}

export default Main;
