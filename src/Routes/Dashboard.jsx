import Navbar from "../Component/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Dashboard;
