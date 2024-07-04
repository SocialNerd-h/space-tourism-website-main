import { Route, createBrowserRouter,  createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from './pages/HomePage';
import PlanetPage from './pages/PlanetPage';
import CrewPage from "./pages/CrewPage";
import TechPage from "./pages/TechPage";

/* json-server work onlu if terminal in src folder -- DONE (restart the project after changes (--watch src/data.json ) in package.json)
    still don't know how to make responsive background nice and clean -- DONE?? (overflow:auto is really helpful)
    to deal with error page
    background image on different pages problem DONE (simply putting all css for background to each page using padding top making space for navbar(which position I made absolute))
    crop the crew img
    active state on every choose-between button DONE (NavLink from react-router-dom with nav elements; useEffect with id solution in classic inner-page menu)
    while loading spinner ul element break down
    overflow malfunction 
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/destination" element={<PlanetPage />} />
      <Route path="/crew" element={<CrewPage />} />
      <Route path="/technology" element={<TechPage />} />
    </Route>

)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
