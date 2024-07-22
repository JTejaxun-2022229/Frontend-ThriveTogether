import { Foro } from "./Foro/foro";
import { AddForum } from "./Foro/addForum";
import { ForumList } from "./Foro/forumList";

const routes = [
    {path: '/forums/', element: <ForumList /> },
    {path: '/forum/', element: <AddForum /> },
    {path: '/forum/:id', element: <Foro /> },
]

export default routes;