import { useState } from 'react';
import Header from './Header';
import SideNav from './sidenav';
import Builder from './qBuilder';
import Main from './Main';
import Footer from './Footer';


function Dashboard() {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className='grid-container'>
            <Header />
            <div className='sidenav-icon' onClick={handleToggle}>
                <strong> &#9776;</strong>
            </div>
            <SideNav
                isActive={isActive}
                handleToggle={ handleToggle }
            />
            <Builder />
            <Main />
            <Footer />
        </div>
    );
}

export default Dashboard;
