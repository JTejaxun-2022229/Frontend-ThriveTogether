import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { Chat } from './components/chat/Chat'

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <Chat/>}
]

export default routes