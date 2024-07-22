import { Dashboard } from "./pages/DashboardPage";
import { Auth } from "./pages/auth";

const routes = [

    { path: '/', element: <Auth /> },
    { path: '/dashboard', element: <Dashboard /> }
]

export default routes
