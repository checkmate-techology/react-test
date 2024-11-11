import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './screens/Dashboard/Dashboard';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
