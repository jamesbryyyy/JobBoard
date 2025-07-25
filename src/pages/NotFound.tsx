// src/pages/NotFound.tsx
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg mb-4">Page Not Found</p>
      <button 
        onClick={() => navigate("/JobBoard")}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go Home
      </button>
    </div>
  );
};


export default NotFound;
