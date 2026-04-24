import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import Friends from "../pages/friends/Friends";
import ErrorPage from "../pages/eroorPage/ErrorPage";
import TimelinePage from "../pages/timelinePage/TimelinePage";
import StatsPage from "../pages/statsPage/StatsPage";


export const router = createBrowserRouter([
  { path: '/', 
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/friends',
        element: <Friends />
      },
      {
        path: '/timeline',
        element: <TimelinePage />
      },
      {
        path: '/stats',
        element: <StatsPage />
      }

    ],
    errorElement: <ErrorPage />
  },
    
])