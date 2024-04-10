import { Provider } from 'react-redux';
import appStore from './componenets/utilities/appStore';
import './App.css';
import Body from './componenets/Body';

function App() {
 
  return (
   <div>
    <Provider store={appStore}>
  <Body/>
  </Provider>
   </div>
  );
}

export default App;
