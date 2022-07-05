import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import ArticleDetails from './Pages/ArticleDetails';

function App() {
    return (
        <Router>
            <div className="App container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/article-1" element={<ArticleDetails />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
