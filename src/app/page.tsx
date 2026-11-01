import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Recruiter from './components/recruiter/recruiter';
import Cases from './components/cases/cases';
import Projects from './components/projects/projects';
import Experience from './components/experience/experience';
import Education from './components/recruiter/education';
import Footer from './components/footer/footer';

export default function Home(){return <><Navbar/><main id="main-content"><Header/><Recruiter/><Cases/><Projects/><Experience/><Education/></main><Footer/></>}
