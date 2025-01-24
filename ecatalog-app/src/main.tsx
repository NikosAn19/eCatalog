import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalLayout from "./Global/GlobalLayouts/GlobalLayout.tsx";

import MainPage from "./Pages/MainPage/MainPage.tsx";
import SettingsPage from "./Pages/SettingsPage/SettingsPage.tsx";
import Wizard from "./Pages/WizardPage/Wizard.tsx";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.tsx";
import AddNewProductPage from "./Pages/AddNewProductPage/AddNewProductPage.tsx";
import TestingPage from "./Pages/TestingPage/TestingPage.tsx";
import OrderProvider from "./Context/OrderContext/OrderContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <OrderProvider>
        <GlobalLayout>
          <MainPage />
        </GlobalLayout>
      </OrderProvider>
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
    path: "/wizard",
    element: (
      <GlobalLayout>
        <Wizard />
      </GlobalLayout>
    ),
  },
  {
    path: "/products",
    element: (
      <GlobalLayout>
        <ProductsPage />
      </GlobalLayout>
    ),
  },
  {
    path: "/add-new-product",
    element: (
      <GlobalLayout>
        <AddNewProductPage />
      </GlobalLayout>
    ),
  },
  {
    path: "/testing",
    element: (
      <GlobalLayout>
        <TestingPage />
      </GlobalLayout>
    ),
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
