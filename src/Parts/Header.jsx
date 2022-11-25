import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const mode = useSelector(state => state.webSet);
  const { dark, lang } = mode;

  return (
    <div>
      <article>
        <p> Dark mode - {dark ? ' on' : 'off'} </p>
        <p> Web Language - {lang} </p>
      </article>
    </div>
  );
}

export default Header;
