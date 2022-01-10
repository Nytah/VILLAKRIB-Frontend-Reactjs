import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/homepage/homepage';
import ErrorPage from './pages/error-page/errorPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path='*' exact={true} element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
