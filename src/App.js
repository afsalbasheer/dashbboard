import './App.css';
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserListPage from "./pages/UserListPage/UserListPage";
import Login from "./pages/Login/Login";
import { useAtom } from 'jotai'
import { isLoggedInAtom } from "./store/atoms";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom)

  return (
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route 
            exact 
            path="/dashboard" 
            element={<ProtectedRoute isLoggedIn={isLoggedIn}><Home /></ProtectedRoute>}
          />
          <Route
            exact
            path="/dashboard/users"
            element={<ProtectedRoute isLoggedIn={isLoggedIn}><UserListPage /></ProtectedRoute>} 
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
