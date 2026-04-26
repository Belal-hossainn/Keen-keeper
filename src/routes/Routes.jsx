import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import Friends from "../pages/friends/Friends";
import ErrorPage from "../pages/eroorPage/ErrorPage";
import TimelinePage from "../pages/timelinePage/TimelinePage";
import StatsPage from "../pages/statsPage/StatsPage";
import FriendDetails from "../pages/friendDetailsPage/FriendDetails";


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
      },
      {
        path: '/friend/:id',
        element: <FriendDetails />,
        loader: () => fetch('/friendsData.json')
      }

    ],
    errorElement: <ErrorPage />
  },
    
])