import { Dashboard } from "./pages/DashboardPage/Dashboard";
import { AuthPage } from "./pages/auth/AuthPage";
import { Register } from "./pages/RegisterPage/Register";
import { AppointmentNew } from "./components/appointment/AppointmentNew.jsx"

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    {
        path: '/dashboard', element: <Dashboard />, children: [
            { path: 'appointment', element: <AppointmentNew /> },
        ]
    }

]

export default routes
