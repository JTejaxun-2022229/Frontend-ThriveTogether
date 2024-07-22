import { Login } from "./pages/AuthPage/Auth";
import { Dashboard } from "./pages/DashboardPage/Dashboard";

const routes = [
    { path: '/', element: <Login /> },
    { path: '/dashboard', element: <Dashboard /> },
];

export default routes;