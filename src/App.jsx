import Counter from './Parts/Counter';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import { connect, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './stores/routes';

// const mapStateToProps = state => ({
//   dark: state.webSet.dark,
//   user: state.auth.user,
// });

const mapStateToProps = state => {
  return { dark: state.webSet.dark, user: state.auth.user };
};

function App({ dark, user }) {
  // function App() {
  // const { dark } = useSelector(state => state.webSet);
  // const { user } = useSelector(state => state.auth);

  return (
    <BrowserRouter>
      <div className={dark ? 'dark' : ''}>
        <Header />
        <Routes>
          {routes.map((route, i) => {
            const { path, exact, auth } = route;
            return (
              <Route
                key={i}
                exact={exact}
                path={path}
                // element={<route.component />}
                element={
                  !(auth && !user) ? (
                    <route.component />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            );
          })}
        </Routes>
        {/* <Counter /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// export default App;
export default connect(mapStateToProps)(App);
