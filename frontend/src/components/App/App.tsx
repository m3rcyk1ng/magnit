import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Project from '../Project/Project';
import { useEffect, useState } from 'react';
import { projectApi } from '../../utils/ProjectsApi';
import Contacts from "../Contacts/Contacts";
import Vacancies from "../Vacancies/Vacancies";
import MainPage from "../MainPage/MainPage";

function App() {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState([]);

  useEffect(() => {
    projectApi
      .getProjects()
      .then((projects) => {
        console.log({ projects });
        setProjects(projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFindProjectById = (id: string) => {
    // @ts-ignore
    const resProject = projects?.filter((project) => project?._id === id);
    setCurrentProject(resProject);
  };

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/projects"
          element={<Projects projects={projects} onSubmit={handleFindProjectById} />}
        />
        <Route path="/project" element={<Project currentProject={currentProject} />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <div style={{ flexGrow: '1' }} />
      <Footer />
    </div>
  );
}

export default App;
