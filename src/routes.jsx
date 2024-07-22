import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { Hero } from "./components/hero/Hero.jsx";
import { Post } from "./components/post/Post.jsx"
import {AppointmentNew} from "./components/appointment/AppointmentNew.jsx"
import { Chat } from "./components/chat/Chat.jsx"

const routes = [
    {path: '/', element: <AuthPage/>},
    {path: '/dashboard', element: <DashboardPage/>, children:[
        { path: 'home', element: <Hero/> },
        { path: 'appointment', element: <AppointmentNew /> },
        { path: 'chat', element: <Chat /> },
        { path: 'post', element: <Post /> },
    ]}

]

export default routes