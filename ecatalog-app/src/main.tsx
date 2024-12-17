import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalLayout from "./Global/GlobalLayouts/GlobalLayout.tsx";

import MainPage from "./Pages/MainPage/MainPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GlobalLayout>
        <MainPage />
      </GlobalLayout>
    ),
    errorElement: <div> ERROR 404 PAGE NOT FOUND</div>,
  },
  {
    path: "/about",
    element: <div />,
  },
  {
    path: "/contact",
    element: <div />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
