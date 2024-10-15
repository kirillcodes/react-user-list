import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {MainPage} from "../../pages/main/ui/MainPage/MainPage.tsx";
import {FavoritesPage} from "../../pages/favorites/ui/FavoritesPage/FavoritesPage.tsx";
import {Layout} from "../layout/index.ts";
import {Provider} from "react-redux";
import {store} from "../../shared/store/store.ts";

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Layout/>, 
    children: [
      {
        index: true,
        element: <MainPage/>
      },
      { 
        path: '/favorites', 
        element: <FavoritesPage/>
      }
  ]},
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} /> 
    </StrictMode>
  </Provider>
);
