/* eslint-disable react/prop-types */
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { PostTask } from "../api/api";
const AddTask = ({ handleOpenTask }) => {
  const [task, setTask] = useState({});

  const handleInputChange = (field, event) => {
    setTask({ ...task, [field]: event.target.value });
  };

  const handleSubmit = () => {
    const userId = jwtDecode(sessionStorage.getItem("token"))?.id;
    PostTask({ ...task, userId })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col gap-4 max-w-full">
      <input
        type="text"
        placeholder="Title"
        className="px-2 py-1 rounded-lg border"
        onChange={(event) => handleInputChange("title", event)}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
        className="px-2 py-1 rounded-lg border"
        onChange={(event) => handleInputChange("description", event)}
      ></textarea>
      <select
        name="Completed"
        id=""
        className="border px-2 py-1 rounded-lg"
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
