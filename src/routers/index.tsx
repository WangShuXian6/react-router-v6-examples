import { RouteObject } from "react-router";

import Home from "../components/Home";
import Contact from "../components/Contact";
import LeagueStandings from "../components/LeagueStandings";
import NewTeamForm from "../components/NewTeamForm";
import PageLayout from "../components/PageLayout";
import Privacy from "../components/Privacy";
import Team from "../components/Team";
import Teams from "../components/Teams";
import Tos from "../components/Tos";
import MainLayout from "../components/MainLayout";

const routers: RouteObject[] = [
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "teams",
        element: <Teams />,
        children: [
          {
            index: true,
            element: <LeagueStandings />,
          },
          {
            path: ":teamId",
            element: <Team />,
          },
          {
            path: "new",
            element: <NewTeamForm />,
          },
        ],
      },
    ],
  },
  {
    element: <PageLayout />,
    children: [
      {
        element: <Privacy />,
        path: "/privacy",
      },
      {
        element: <Tos />,
        path: "/tos",
      },
    ],
  },
  {
    element: <Contact />,
    path: "/contact-us",
  },
];

export default routers;
