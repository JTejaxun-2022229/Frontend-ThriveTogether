import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { Hero } from "./components/hero/Hero.jsx";
import { Post } from "./components/post/Post.jsx"
import { AppointmentNew } from "./components/appointment/AppointmentNew.jsx"
import { Chat } from "./components/chat/Chat.jsx"
import { Foro } from "./components/foro/foro.jsx";
import { AddForum } from "./components/foro/addForum.jsx";
import { PostList } from "./components/postList/PostList.jsx"
import { ForumList } from "./components/foro/forumList.jsx";
import { Register } from "./pages/RegisterPage/Register"
import { UserManagement } from "./components/users/UserManagment"
import { NoteList } from "./components/notes/NoteList"
import { CreateUser } from "./components/users/CreateUser";
import { Profile } from "./components/users/Profile"
/* import { PostUser } from "./components/postUser/PostUser.jsx" */
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
            { path: 'home', element: <Hero /> },
            { path: 'appointment', element: <AppointmentNew /> },
            { path: 'chat', element: <Chat /> },
            { path: 'post', element: <Post /> },
            { path: 'postList', element: <PostList /> },
            { path: 'forums/', element: <ForumList /> },
            { path: 'forum/', element: <AddForum /> },
            { path: 'forum/:id', element: <Foro /> },
        ]
    }

]

export default routes