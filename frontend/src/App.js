
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NewsLetters from './Pages/NewsLetters';
import ErrorPage from './Pages/ErrorPage';


function App() {
  return (
    <Router>
    <div className="App container">
      <Header/>
      <Routes>
      <Route path="/" element={<NewsLetters/>} />
      <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
