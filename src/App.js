import './App.scss';
import Rooms from './components/Rooms-page/Rooms';
import Homepage from './components/homepage/Homepage';
import Overview from './components/overview-page/Overview';
import Header from './re-components/header/Header';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      {/* <Homepage/> */}
      {/* <Overview/> */}
      <Rooms/>
    </div>
    </>
  );
}

export default App;
