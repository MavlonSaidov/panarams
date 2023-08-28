import './App.scss';
import Rooms from './components/Rooms-page/Rooms';
import ContactsPage from './components/contacts-page/ContactsPage';
import Homepage from './components/homepage/Homepage';
import Overview from './components/overview-page/Overview';
import ServicesPage from './components/services-page/ServicesPage';
import Header from './re-components/header/Header';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      {/* <Homepage/> */}
      {/* <Overview/> */}
      {/* <Rooms/> */}
      {/* <ServicesPage/> */}
      <ContactsPage/>
    </div>
    </>
  );
}

export default App;
