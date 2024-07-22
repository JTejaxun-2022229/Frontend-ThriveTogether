import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { Hero } from "./components/hero/Hero.jsx";
import {AppointmentNew} from "./components/appointment/AppointmentNew.jsx"

const routes = [
    {path: '/', element: <AuthPage/>},
    {path: '/dashboard', element: <DashboardPage/>, children:[
        { path: 'home', element: <Hero/> },
        { path: 'appointment', element: <AppointmentNew /> },
        { path: 'chat', element: <AppointmentNew /> },
    ]}

]

export default routes