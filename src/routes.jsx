import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth";
import { Register } from "./pages/RegisterPage/Register"
import { UserManagement } from "./components/users/UserManagment"
import { NoteList } from "./components/notes/NoteList"

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/users', element: <UserManagement /> },
    { path: '/notes', element: <NoteList /> },
    {
        path: '/dashboard', element: <DashboardPage />, children: [
        ]
    }

]

export default routes