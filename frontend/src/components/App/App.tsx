import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';
import Projects from '../Projects/Projects';
import Project from '../Project/Project';
import { useEffect, useState } from 'react';
import { projectApi } from '../../utils/ProjectsApi';

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
    const resProject = projects?.filter((project) => project?._id === id);
    setCurrentProject(resProject);
  };

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Routes>
        <Route path="/" element={<AboutCompany />} />
        <Route
          path="/projects"
          element={<Projects projects={projects} onSubmit={handleFindProjectById} />}
        />
        <Route path="/project" element={<Project currentProject={currentProject} />} />
        <Route path="/contacts" element={<Project currentProject={currentProject} />} />
      </Routes>
      <div style={{ flexGrow: '1' }} />
      <Footer />
    </div>
  );
}

export default App;
