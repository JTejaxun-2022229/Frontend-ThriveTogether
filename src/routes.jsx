import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { Post } from "./components/Post/Post.jsx"
import {AppointmentNew} from "./components/appointment/AppointmentNew.jsx"

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/dashboard', element: <DashboardPage/>, children:[
        { path: 'appointment', element: <AppointmentNew /> }, 
        { path: 'post', element: <Post /> },
    ]}

]

export default routes