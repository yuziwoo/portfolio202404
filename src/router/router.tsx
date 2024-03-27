import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MainPage from '../pages/MainPage/MainPage';
import { path } from '../constants/path';

const router = createBrowserRouter([
  {
    path: path.route.ROOT,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
