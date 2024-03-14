import Navbar from "../Component/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetTask } from "../api/api";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    GetTask()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Dashboard;
