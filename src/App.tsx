import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddJobForm from './components/JobForm';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-job" element={<AddJobForm />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
