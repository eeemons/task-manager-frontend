/* eslint-disable react/prop-types */
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { PostTask } from "../api/api";
import toast, { Toaster } from "react-hot-toast";
const AddTask = ({ handleOpenTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: "select",
  });
  const [formError, setFormError] = useState({
    title: false,
    description: false,
    completed: false,
  });

  const handleInputChange = (field, event) => {
    setTask({ ...task, [field]: event.target.value });
  };

  const handleSubmit = () => {
    if (
      task?.completed === "select" ||
      task?.description === "" ||
      task?.title === ""
    ) {
      if (task?.completed === "select") {
        toast.error("Please select a status");
        setFormError({ ...formError, completed: true });
        setTimeout(() => {
          setFormError({ ...formError, completed: false });
        }, 4000);
      }
      if (task?.description === "") {
        toast.error("Please enter a description");
        setFormError({ ...formError, description: true });
        setTimeout(() => {
          setFormError({ ...formError, description: false });
        }, 4000);
      }
      if (task.title === "") {
        toast.error("Please enter a title");
        setFormError({ ...formError, title: true });
        setTimeout(() => {
          setFormError({ ...formError, title: false });
        }, 4000);
      }
    } else {
      const userId = jwtDecode(sessionStorage.getItem("token"))?.id;
      PostTask({ ...task, userId })
        .then((res) => {
          console.log(res);
          setTask({
            title: "",
            description: "",
            completed: "select",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="flex flex-col gap-4 max-w-full">
      <Toaster />
      <input
        type="text"
        placeholder="Title"
        value={task?.title}
        className={`px-2 py-1 rounded-lg border overflow-x-hidden transition-colors duration-400 ease-in-out ${
          formError?.title && "border-red-500 animate-pulse"
        }`}
        onChange={(event) => handleInputChange("title", event)}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={task?.description}
        placeholder="Description"
        className={`px-2 py-1 rounded-lg border overflow-x-hidden transition-colors duration-400 ease-in-out ${
          formError?.description && "border-red-500 animate-pulse"
        }`}
        onChange={(event) => handleInputChange("description", event)}
      ></textarea>
      <select
        name="Completed"
        id=""
        value={task?.completed}
        className={`border px-2 py-1 rounded-lg overflow-x-hidden transition-colors duration-400 ease-in-out ${
          formError?.completed && "border-red-500 animate-pulse"
        }`}
        onChange={(event) => handleInputChange("completed", event)}
      >
        <option value="select">Select an option</option>
        <option value={true}>Completed</option>
        <option value={false}>Not completed</option>
      </select>
      <button className=" bg-teal-400 rounded-lg py-2" onClick={handleSubmit}>
        Add Task
      </button>
      <button className=" bg-red-400 rounded-lg py-2" onClick={handleOpenTask}>
        Close
      </button>
    </div>
  );
};

export default AddTask;
