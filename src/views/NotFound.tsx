import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      navigate("/");
    }, 3000);
  }, []);

  return <h1>Not Found</h1>;
};

export default NotFound;
