import Header from './component/Header';
import AddTask from './component/AddTask';
import ShowTask from './component/ShowTask';
import './App.css';
import { useEffect, useState } from "react";

export default function App() {
  const [TaskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("TaskList") || "[]"));
  const [task, setTask] = useState({});
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(TaskList));
  }, [TaskList])
  return (
    <>
      <div className="App">
        <Header />
        <AddTask task={task} setTask={setTask} TaskList={TaskList} setTaskList={setTaskList} />
        <ShowTask task={task} setTask={setTask} TaskList={TaskList} setTaskList={setTaskList} />
      </div>
    </>
  )
}




// // import React, { useState } from 'react'
// // import Header from './component/Header';
// // import AddTask from './component/AddTask';
// // import ShowTask from './component/ShowTask';
// // import './App.css'

// // export default function App() {
// //   const [tasks, setTasks] = useState([]);
// //   const [taskList, setTaskList] = useState([])
// //   return (
// //     <>
// //       <div className="App">
// //         <Header />
// //         <AddTask tasks={tasks} setTasks={setTasks} />
// //         <ShowTask tasks={tasks} setTasks={setTasks} />
// //       </div>

// //     </>  
// //   )
// // }
// import './App.css';
// import Header from './component/Header';
//  import AddTask from './component/AddTask';
//  import ShowTask from './component/ShowTask';
// import { useEffect, useState } from "react";

// export default function App() {
//   const [taskList, setTaskList] = useState(() => {
//     try {
//       const saved = localStorage.getItem("taskList");
//       return saved ? JSON.parse(saved) : [];
//     } catch (e) {
//       console.error("Failed to parse taskList from localStorage:", e);
//       return [];
//     }
//   });  
//   const [tasks, setTasks] = useState([]);
//   useEffect(() => {
//     localStorage.setItem("taskList", JSON.stringify(taskList));
//   }, [taskList])
//   return (
//     <>
//       <div className="App">
//         <Header />
//         <AddTask tasks={tasks} setTasks={setTasks} taskList={taskList} setTaskList={setTaskList} />
//         <ShowTask tasks={tasks} setTasks={setTasks} taskList={taskList} setTaskList={setTaskList} />
//       </div>
//     </>
//   )  
// }

