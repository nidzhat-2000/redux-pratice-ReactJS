import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routes } from '../stores/routes';

function Header() {
  const mode = useSelector(state => state.webSet);
  const { dark, lang } = mode;

  // console.log(routes);

  return (
    <div>
      <nav className="flex">
        <NavLink to="/">Home</NavLink> <br />
        <NavLink to="/about">About</NavLink> <br />
        <NavLink to="/profile">Profile</NavLink>
        {/* {routes.map((route, i) => {
          return (
            route.path !== '/login' && (
              <NavLink className="mar" key={i} to={route.path}>
                {route.component}
              </NavLink>
            )
          );
        })} */}
      </nav>

      <article>
        <p> Dark mode - {dark ? ' on' : 'off'} </p>
        <p> Web Language - {lang} </p>
      </article>
    </div>
  );
}

export default Header;
