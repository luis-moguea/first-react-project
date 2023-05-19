import { Routes, Route } from "react-router-dom";
import SpecifiedRoutes from "./SpecifiedRoutes";
import Card from "./Card";
import NotFound from "../views/NotFound";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Card />}></Route>
        <Route path="/first/*" element={<SpecifiedRoutes />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
