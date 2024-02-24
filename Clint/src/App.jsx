import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Username from "./Component/Username";
import Register from "./Component/Register";
import Password from "./Component/Password";
import Profile from "./Component/Profile";
import Recovery from "./Component/Recovery";
import Reset from "./Component/Reset";


const App = ()=> {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Username/>,
    },
    {
      path: '/register',
      element: <Register/>,
    },
    {
      path:'/password',
      element : <Password/>
    },
    {
      path : '/profile',
      element : <Profile/>
    },
    {
      path :'/recovery',
      element : <Recovery/>
    },
    {
      path : '/reset',
      element : <Reset/>
    }

  ]);
  return (
    <>
      <main>
      <RouterProvider router={route}></RouterProvider>
      </main>
    </>
  );
}

export default App;
