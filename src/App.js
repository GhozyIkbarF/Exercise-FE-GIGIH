import './App.css';
// import ListLooping from './pages/ListLooping';
// import LearnProps from './pages/LearnProps';
// import Data from './Component/Data/Data'
import Index from './pages/search/index'
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      {/* <LearnProps /> */}
      {/* <ListLooping /> */}
      {/* <Data /> */}
        <Index />
      </Provider>
    </div>
  );
}

export default App;
