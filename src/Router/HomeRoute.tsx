import { PrivateLayout } from "../Layout/PrivateLayout";
import { UserManagement } from "../Screens/HomeScreens/UserManagement";

export const HomeRoute = [
  {
    element:<PrivateLayout/>,
    children:[
      {
        path: "usermanagement",
        element: <UserManagement />,
      }
    ]
   
  },
];
