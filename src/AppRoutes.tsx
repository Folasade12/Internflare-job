import { Routes, Route} from "react-router-dom";
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<h2>Home Page</h2>} />
            <Route path="/jobs" element={<h2>Find Jobs</h2>} />
            <Route path="/about" element={<h2>About Us</h2>} />
            <Route path="/login" element={<h2>Login Page</h2>} />
            <Route path="/register" element={<h2>Register</h2>} />
        </Routes>
    );
}