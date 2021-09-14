import './App.css';
import { Provider } from 'react-redux';
import store from '../Redux/Quotes/store';
import QuotesCard from './quotesCard';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <QuotesCard />
      </>
    </Provider>
  )
}



export default App;
