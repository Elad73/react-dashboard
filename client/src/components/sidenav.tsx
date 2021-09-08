// const menuIconEl = document.getElementsByClassName('menu-icon');
// const sidenavEl = document.getElementsByClassName('.sidenav');
// const sidenavCloseEl = document.getElementsByClassName('.sidenav__close-icon');

// // Add and remove provided class names
// function toggleClassName(el, className) {
//     if (el.hasClass(className)) {
//     el.removeClass(className);
//     } else {
//     el.addClass(className);
//     }
// }

// // Open the side nav on click
// menuIconEl.on('click', function() {
//     toggleClassName(sidenavEl, 'active');
// });

// // Close the side nav on click
// sidenavCloseEl.on('click', function() {
//     toggleClassName(sidenavEl, 'active');
// });


    //   const menuIcon = document.querySelector('.menu-icon');
    //   const aside = document.querySelector('.aside');
    //   const asideClose = document.querySelector('.aside_close-icon');

    //   function toggle(el, className) {
    //     if (el.classList.contains(className)) {
    //       el.classList.remove(className);
    //     } else {
    //       el.classList.add(className);
    //     }
    //   }

    //   menuIcon.addEventListener('click', function() {
    //     toggle(aside, 'active');
    //   });

    //   asideClose.addEventListener('click', function() {
    //     toggle(aside, 'active');
    //   });
  
function SideNav() {
    return (
        <aside className="sidenav">
            <div className="sidenav__close-icon">
                <i className="fas fa-times"></i>
            </div>
            <ul className="sidenav__list">
                <li className="sidenav__list-item">Item One</li>
                <li className="sidenav__list-item">Item Two</li>
                <li className="sidenav__list-item">Item Three</li>
                <li className="sidenav__list-item">Item Four</li>
                <li className="sidenav__list-item">Item Five</li>
            </ul>
        </aside>
    );
}

export default SideNav;