
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout.jsx'
import Home from './pages/Home';
import User from './pages/User';
import Settings from './pages/Settings.jsx';
import Notification from './pages/Notification.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            {
               index:true,
               element: <Home/>
            },
            {
                path: '/User',
                element: <User/>
            },
            {
                path: '/Settings',
                element: <Settings/>
            },
            {
                path: '/Notication',
                element: <Notification/>
            }
        ]
    },
   
]) 
export default router