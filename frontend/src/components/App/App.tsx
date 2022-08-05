import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Project from '../Project/Project';
import { useEffect, useState } from 'react';
import { projectApi } from '../../utils/ProjectsApi';
import Contacts from '../Contacts/Contacts';
import Vacancies from '../Vacancies/Vacancies';
import MainPage from '../MainPage/MainPage';
import {vacanciesApi} from "../../utils/VacanciesApi";
import Vacancy from "../Vacancy/Vacancy";

function App() {
  const [projects, setProjects] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [currentVacancy, setCurrentVacancy] = useState([]);
  const [vacancyId, setVacancyId] = useState('');

  useEffect(() => {
    projectApi
      .getProjects()
      .then((projects) => {
        setProjects(projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    vacanciesApi
      .getVacancies()
      .then((vacancies) => {
        setVacancies(vacancies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFindVacancyById = (id: string) => {
    // @ts-ignore
    const resVacancy = vacancies?.filter((vacancy) => vacancy?._id === id);
    setCurrentVacancy(resVacancy);
    setVacancyId(id);
  };

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/projects"
          element={<Projects projects={projects} />}
        />
        <Route path={`/projects/:id`} element={<Project projects={projects}/>} />
        <Route path="/vacancies" element={<Vacancies vacancies={vacancies} onSubmit={handleFindVacancyById} />} />
        <Route path={`/vacancy/${vacancyId}`} element={<Vacancy currentVacancy={currentVacancy} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <div style={{ flexGrow: '1' }} />
      <Footer />
    </div>
  );
}

export default App;
