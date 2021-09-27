function Header() {
    return (
        <header className='header '>
            <div className='header__search'>Search...</div>
            <div className='header__title'>Cerebro Reporting</div>
            <div className='header__profile'>
                <div className='header__avatar'>Your face</div>
                <div className='header__access'>Logout</div>
            </div>
        </header>
    );
}

export default Header;
