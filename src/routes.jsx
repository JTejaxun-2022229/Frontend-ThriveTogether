import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth";
import { Register } from "./pages/RegisterPage/Register"
import { UserManagement } from "./components/users/UserManagment"
import { NoteList } from "./components/notes/NoteList"
import { CreateUser } from "./components/users/CreateUser";
import { Profile } from "./components/users/Profile"
import { ProfesionalSupporter } from "./components/users/ProfesionalSupporter"
import { Patients } from "./components/users/Patients"

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/users', element: <UserManagement /> },
    { path: '/notes', element: <NoteList /> },
    { path: '/create-user', element: <CreateUser /> },
    { path: '/profile', element: <Profile /> },
    { path: '/supporters', element: <ProfesionalSupporter /> },
    { path: '/patients', element: <Patients /> },
    {
        path: '/dashboard', element: <DashboardPage />, children: [
        ]
    }

]

export default routes