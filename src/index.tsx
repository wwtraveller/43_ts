import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
//import Lesson06 from './lessons/lesson06/Lesson06';
//import Lesson07 from './lessons/lesson07/Lesson07';
import Layout from './components/layout/Layout';
// import StarWarsGallery from './components/StarWarsGallery/StarWarsGallery';
import Lesson09 from './lessons/lesson09/Lesson09';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    {/* <Lesson06 />
    <Lesson07 /> */}
    <Layout />
    {/* <StarWarsGallery /> */}
    <Lesson09 />
  
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

