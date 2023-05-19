import { Routes, Route } from "react-router-dom";
import Test from "../views/Test";
import Test2 from "../views/Test2";

const SpecifiedRoutes = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Test />}></Route>
          <Route path="second" element={<Test2 />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default SpecifiedRoutes;
