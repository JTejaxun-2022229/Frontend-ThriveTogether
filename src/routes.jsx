import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import {AppointmentNew} from "./components/appointment/AppointmentNew.jsx"

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/dashboard', element: <DashboardPage/>, children:[
        { path: 'appointment', element: <AppointmentNew /> },
    ]}

]

export default routes