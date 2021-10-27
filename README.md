# react-router-v6-examples

## 新版路由示例[v6]
>该路由对应 url
```ts
const urls=[
  "/",
  "/teams",
  "/teams/:teamId",
  "/teams/:teamId/edit",
  "/teams/new",
  "/privacy",
  "/tos",
  "/contact-us"
];

const routes = [
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "teams",
        element: <Teams />,
        children: [
          {
            index: true,
            element: <LeagueStandings />
          },
          {
            path: ":teamId",
            element: <Team />
          },
          {
            path: ":teamId/edit",
            element: <EditTeam />
          },
          {
            path: "new",
            element: <NewTeamForm />
          }
        ]
      }
    ]
  },
  {
    element: <PageLayout />,
    children: [
      {
        element: <Privacy />,
        path: "/privacy"
      },
      {
        element: <Tos />,
        path: "/tos"
      }
    ]
  },
  {
    element: <Contact />,
    path: "/contact-us"
  }
];
```