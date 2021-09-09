import Builder from "./qBuilder";
import SideNav from "./sidenav";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);    
  };


  return (
      <div className="grid-container">
        <div className="menu-icon" onClick={handleToggle}>
          <strong> &#9776;</strong>
        </div>
        <header className="header border">
          <div className="header__search">Search...</div>
          <div className='header__title'>Cerebro Reporting</div>
          <div className='header__profile'>
            <div className='header__avatar'>Your face</div>
            <div className="header__access">Logout</div>
          </div>
        </header>
        <aside className={isActive ? "sidenav border active" : "sidenav border"} >
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
        <main className="main border">
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
        <footer className="footer border">
          <div className="footer_copyright">&copy;2021</div>
          <div className="footer_byline">Made with &hearts;</div>
        </footer>
      </div>
  )
}

// function App() {
//   return (
//       <div id='page' className='grid-container border'>
//         <div className="menu-icon">
//             <i className="fas fa-bars"></i>
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
