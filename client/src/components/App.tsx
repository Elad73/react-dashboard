import Builder from "./qBuilder";
import SideNav from "./sidenav";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";
import QueryBuilder, { formatQuery, RuleGroupType } from "react-querybuilder";
import CombinatorSelector from "./CombinatorSelector";
import fields from "../fields";
import getOperators from "../getOperators";

function App() {

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);    
  };

  const [query, setQuery] = useState<RuleGroupType>({
    id: "root",
    combinator: "and",
    rules: [],
});


  return (
      <div className="grid-container">
      
        <header className="header ">
          <div className="header__search">Search...</div>
          <div className='header__title'>Cerebro Reporting</div>
          <div className='header__profile'>
            <div className='header__avatar'>Your face</div>
            <div className="header__access">Logout</div>
          </div>
      </header>
      <div className="sidenav-icon" onClick={handleToggle}>
            <strong> &#9776;</strong>
      </div>
      <aside className={isActive ? "sidenav  active" : "sidenav "} >
         
          <div className="sidenav__close-icon"  onClick={handleToggle}>
            <i className="fas fa-times"></i>
          </div>
          <ul className="sidenav__list">
            <li className="sidenav__list-item">Menu item1</li>
            <li className="sidenav__list-item">Menu item2</li>
            <li className="sidenav__list-item">Menu item3</li>
            <li className="sidenav__list-item">Menu item4</li>
            <li className="sidenav__list-item">Menu item5</li>
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
                    }}
                />
                <div className="builder-card">
                    <div className="builder-card__heading">{formatQuery(query, "sql")}</div>
                </div>
                <div className="builder-card">
                    <div className="builder-card__updates">{formatQuery(query, "json")}</div>
                </div>
            </div>
        <main className="main ">
          <div className="main_overview">
            <div className="overview_card">
              <div className="overview_card-info">Overview</div>
              <div className="overview_card-icon">Card</div>
            </div>
            <div className="overview_card">
              <div className="overview_card-info">Overview</div>
              <div className="overview_card-icon">Card</div>
            </div>
            <div className="overview_card">
              <div className="overview_card-info">Overview</div>
              <div className="overview_card-icon">Card</div>
            </div>
            <div className="overview_card">
              <div className="overview_card-info">Overview</div>
              <div className="overview_card-icon">Card</div>
            </div>
          </div>

          <div className="main_cards">
            <div className="card">Card</div>
            <div className="card">Card</div>
            <div className="card">Card</div>
          </div>
        </main>
        <footer className="footer ">
          <div className="footer_copyright">&copy;2021</div>
          <div className="footer_byline">Made with &hearts;</div>
        </footer>
      </div>
  )
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
