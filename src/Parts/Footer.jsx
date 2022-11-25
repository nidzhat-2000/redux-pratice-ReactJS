import React from 'react';
import { setLanguage, setMode } from '../stores/webSet';
import { useDispatch, useSelector } from 'react-redux';

function Footer() {
  const { dark, lang } = useSelector(state => state.webSet);
  console.log(dark, lang);

  const dispatch = useDispatch();

  const optionsLang = ['tr', 'az', 'eng'];

  const changeLang = lang => {
    dispatch(setLanguage(lang));
  };

  return (
    <div>
      <h2> Footer</h2>

      <div className="lang">
        {optionsLang.map((langOpt, i) => {
          return (
            <button
              key={i}
              onClick={() => changeLang(langOpt)}
              className={langOpt === lang ? 'active' : ''}
            >
              {langOpt}
            </button>
          );
        })}
      </div>
      <div className="setMode">
        <button onClick={() => dispatch(setMode())}>
          {dark ? 'light' : 'dark'}
        </button>
      </div>
    </div>
  );
}

export default Footer;
