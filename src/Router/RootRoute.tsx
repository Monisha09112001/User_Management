import { PrivateRoute } from "../Guards/PrivateRoute";
import { PublicRoute } from "../Guards/PublicRoute";
import { NotFound } from "../Screens/NotFound";
import { AuthRoute } from "./AuthRoute";
import { HomeRoute } from "./HomeRoute";

export const RootRoute = [
  {
    element: <PublicRoute />,
    children: AuthRoute,
  },
  {
    element: <PrivateRoute />,
    children: HomeRoute,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
