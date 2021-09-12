// import Builder from './qBuilder';
// import SideNav from './sidenav';
// import Footer from './Footer';
// import Header from './Header';
// import Main from './Main';
import { useState } from 'react';
import QueryBuilder, { formatQuery, RuleGroupType } from 'react-querybuilder';
import CombinatorSelector from './CombinatorSelector';
import fields from '../fields';
import getOperators from '../getOperators';
import ValueEditor from '../ValueEditor';
import valueProcessor from '../valueProcessor';

function App() {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    const [query, setQuery] = useState<RuleGroupType>({
        id: 'root',
        combinator: 'and',
        rules: [],
    });

    const [rawData, setRawData] = useState<any[]>([]);
    const getData = async () => {
        const body = JSON.stringify(query);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        let res: { data: any[]; chartData: any[]; error?: string } = {
            data: [],
            chartData: [],
        };

        try {
            res = await (
                await fetch('api/sales', { method: 'POST', body, headers })
            ).json();
        } catch (err) {
            console.log('getData err: ' + err);
        }

        if (res.error) {
            console.log('res.error: ' + res.error);
        } else {
            setRawData(res.data);
        }
    };

    return (
        <div className='grid-container'>
            <header className='header '>
                <div className='header__search'>Search...</div>
                <div className='header__title'>Cerebro Reporting</div>
                <div className='header__profile'>
                    <div className='header__avatar'>Your face</div>
                    <div className='header__access'>Logout</div>
                </div>
            </header>
            <div className='sidenav-icon' onClick={handleToggle}>
                <strong> &#9776;</strong>
            </div>
            <aside className={isActive ? 'sidenav  active' : 'sidenav '}>
                <div className='sidenav__close-icon' onClick={handleToggle}>
                    <i className='fas fa-times'></i>
                </div>
                <ul className='sidenav__list'>
                    <li className='sidenav__list-item'>Menu item1</li>
                    <li className='sidenav__list-item'>Menu item2</li>
                    <li className='sidenav__list-item'>Menu item3</li>
                    <li className='sidenav__list-item'>Menu item4</li>
                    <li className='sidenav__list-item'>Menu item5</li>
                </ul>
            </aside>
            <div className='builder'>
                <QueryBuilder
                    fields={fields}
                    query={query}
                    onQueryChange={(q) => setQuery(q)}
                    getOperators={getOperators}
                    controlElements={{
                        //addGroupAction: () => null,
                        combinatorSelector: CombinatorSelector,
                        valueEditor: ValueEditor,
                    }}
                />
                <button onClick={getData}>Get Data</button>
                <div className='builder-card'>
                    <div className='builder-card__heading'>
                        {formatQuery(query, { format: 'sql', valueProcessor })}
                    </div>
                </div>
                <div className='builder-card'>
                    <div className='builder-card__updates'>
                        {formatQuery(query, 'json')}
                    </div>
                </div>
            </div>
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
                    <div className='card'>Card</div>
                    <div className='card'>Card</div>
                    <div className='card'>Card</div>
                </div>
            </main>
            <footer className='footer '>
                <div className='footer_copyright'>&copy;2021</div>
                <div className='footer_byline'>Made with &hearts;</div>
            </footer>
        </div>
    );
}

// function App() {
//   const [isActive, setActive] = useState(false);

//   const handleToggle = () => {
//     setActive(!isActive);
//   };
//   return (
//       <div className="grid-container">
//         <div className="sidenav-icon" onClick={handleToggle}>
//           <strong> &#9776;</strong>
//           <i className="fas fa-bars"></i>
//         </div>
//         <Header />
//         <Builder />
//         <SideNav />
//         <Main />
//         <Footer />
//       </div>
//   );
// }

export default App;
