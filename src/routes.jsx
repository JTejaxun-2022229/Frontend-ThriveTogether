import { Dashboard } from "./pages/DashboardPage/Dashboard";
import { AuthPage } from "./pages/auth/AuthPage";
import { Register } from "./pages/RegisterPage/Register";

const routes = [

    { path: '/', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/dashboard', element: <Dashboard /> }
]

export default routes
