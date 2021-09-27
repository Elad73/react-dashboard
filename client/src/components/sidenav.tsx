import React from 'react';
import { useHistory } from 'react-router-dom';

function SideNav(props: any) {
    const history = useHistory();
    
    return (
        <aside className={props.isActive ? 'sidenav  active' : 'sidenav '}>
            <div className='sidenav__close-icon' onClick={props.handleToggle}>
                <i className='fas fa-times'></i>
            </div>
            <ul className='sidenav__list'>
                <li
                    className='sidenav__list-item'
                    onClick={() => history.push('/reports/performance')}
                >
                    Performance report
                </li>
                <li className='sidenav__list-item'>Menu item2</li>
                <li className='sidenav__list-item'>Menu item3</li>
                <li className='sidenav__list-item'>Menu item4</li>
                <li className='sidenav__list-item'>Menu item5</li>
            </ul>
        </aside>
    );
}

export default SideNav;
