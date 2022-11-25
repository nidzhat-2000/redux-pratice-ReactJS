import Counter from './Parts/Counter';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import { useSelector } from 'react-redux';

function App() {
  const { dark } = useSelector(state => state.webSet);

  
  return (
    <div className={dark ? 'dark' : ''}>
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
