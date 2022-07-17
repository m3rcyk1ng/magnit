import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';

function App() {
  return (
    <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <Routes>
        <Route path="/" element={<AboutCompany />} />
      </Routes>
      <div style={{flexGrow: '1'}}/>
      {/*<AboutMe />*/}
      <Footer />
    </div>
  );
}

export default App;
