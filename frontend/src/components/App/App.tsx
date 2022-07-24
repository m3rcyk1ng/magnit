import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';
import Projects from '../Projects/Projects';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Routes>
        <Route path="/" element={<AboutCompany />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <div style={{ flexGrow: '1' }} />
      <Footer />
    </div>
  );
}

export default App;
