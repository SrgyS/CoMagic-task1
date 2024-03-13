import AppForm from '../components/AppForm';
import AppLayout from '../components/AppLayout';
import ErrorPage from '../components/ErrorPage';
import FormData from '../components/FormData';
import Home from '../components/Home';
import YearControl from '../components/YearControl';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/year',
                element: <YearControl />,
            },
            {
                path: '/form',
                element: <AppForm />,
            },
            {
                path: '/formdata',
                element: <FormData />,
            },
        ],
    },
]);
