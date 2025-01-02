import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FindDogSitter from "./pages/FindDogSitter.jsx";
import HomePage from "./pages/HomePage.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Services from "./pages/Services.jsx";
import Questions from "./pages/Questions.jsx";
import LoginCard from "./pages/LoginCard.jsx";


const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { 
        path: "services", 
        element: <Services />,
        children: [
          {path: ":id", element: <Services />},
        ]
      },
      { 
        path: "search-sitters", 
        element: <FindDogSitter />,
        children: [
          {path: ":id", element: <FindDogSitter />},
        ]
      },
      {
        path: "questions",
        element: <Questions />,
        children: [
          { path: ":id", element: <Questions /> },
        ],
      },
      {
        path: "login",
        element: <LoginCard />,
        children: [
          { path: ":id", element: <LoginCard /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
