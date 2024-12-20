import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalLayout from "./Global/GlobalLayouts/GlobalLayout.tsx";

import MainPage from "./Pages/MainPage/MainPage.tsx";
import SettingsPage from "./Pages/SettingsPage/SettingsPage.tsx";

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
    path: "/settings",
    element: (
      <GlobalLayout>
        <SettingsPage />
      </GlobalLayout>
    ),
  },
  {
    path: "/contact",
    element: <div />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
