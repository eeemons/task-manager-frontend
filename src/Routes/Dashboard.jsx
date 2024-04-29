import Navbar from "../Component/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetTask } from "../api/api";
import { Reorder } from "framer-motion";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState([]);
  const [notCompleted, setNotCompleted] = useState([]);

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
        setCompleted(res.data.filter((task) => task.completed));
        setNotCompleted(res.data.filter((task) => !task.completed));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="m-2 md:flex md:justify-around">
        <div className="md:min-w-[40%]">
          <h1 className="font-bold text-xl">Completed</h1>
          <br />
          <Reorder.Group
            axis="y"
            values={completed}
            onReorder={setCompleted}
            className="flex flex-col gap-2"
          >
            {completed.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                className="p-2 bg-slate-100 w-full border rounded-md flex items-center justify-between"
              >
                <div>
                  <h1 className="font-bold text-lg">{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <button className="font-bold text-red-600">x</button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
        <br />
        <div className="md:min-w-[40%]">
          <h1 className="font-bold text-xl">Not completed</h1>
          <br />
          <Reorder.Group
            axis="y"
            values={notCompleted}
            onReorder={setNotCompleted}
            className="flex flex-col gap-2"
          >
            {notCompleted.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                className="p-2 bg-slate-100 w-full border rounded-md flex items-center justify-between"
              >
                <div>
                  <h1 className="font-bold text-lg">{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <button className="font-bold text-red-600">x</button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
