import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';

function App() {
  return (
    <div className="App">
      {/*<Header />*/}
      <Routes>
        <Route path="/" element={<AboutCompany />} />
      </Routes>
      {/*<AboutMe />*/}
      <Footer />
    </div>
  );
}

export default App;
