import React from 'react'

export default function Addtask({ task, setTask, TaskList, setTaskList }) {
    function handleSubmit(e) {
        e.preventDefault();
        if (task.id) {
            const date = new Date();
            const updatedTaskList = TaskList.map((todo) =>
                todo.id === task.id
                    ? {
                        id: task.id,
                        name: task.name,
                        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                    }
                    : todo
            );
            setTaskList(updatedTaskList);
            setTask({});
        } else {
            const date = new Date();

            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            };
            setTaskList([...TaskList, newTask]);
            setTask({});
        }
    }
    return (
        <>
            <section className="addTask">
                <form onSubmit={handleSubmit}>
                    <input type="text" name='task' autoComplete='off' placeholder='Add Task' maxLength={25} value={task.name || ""}
                        onChange={(e) => setTask({ ...task, name: e.target.value })} />
                    <button type='submit'>{task.id ? "Upadate" : "Add"}</button>
                </form>
            </section>
        </>
    )
}


// // import React from "react";

// // export default function AddTask({ tasks, setTasks, taskList, setTaskList }) {
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         const date = new Date();
// //         const taskName = e.target.task.value;
// //         const newTask = {
// //         id: date.getTime(),
// //         name: taskName,
// //         date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
// //         };
// //         setTasks([...tasks, newTask]);
// //         e.target.reset();
// //     };
// //   return (
// //     <>
// //       <section class="addTask">
// //         <form onSubmit={handleSubmit}>
// //           <input
// //             type="text"
// //             name="task"
// //             placeholder="Add a new task"
// //             autoComplete="off"
// //             maxLength={50}
// //             onChange={(e) => {setTaskList(e.target.value)}}
            
// //           />
// //           <button type="submit">Add</button>
// //         </form>
// //       </section>
// //     </>
// //   );
// // }
// import React from 'react'
 
// export default function Addtask({ tasks, setTasks, TaskList, setTaskList }) {
//     function handleSubmit(e) {
//         e.preventDefault();
//         if (tasks.id) {
//             const date = new Date();
//             const updatedTaskList = TaskList.map((todo) =>
//                 todo.id === tasks.id
//                     ? {
//                         id: tasks.id,
//                         name: tasks.name,
//                         time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
//                     }
//                     : todo
//             );
//             setTaskList(updatedTaskList);
//             setTasks({});
//         } else {
//             const date = new Date();

//             const newTask = {
//                 id: date.getTime(),
//                 name: e.target.task.value,
//                 time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
//             };
//         }
//         setTaskList([...TaskList, newTask]);
//         setTasks({}); // Updated to clear tasks after adding a new task
//     }
//      return (
//         <>
//             <section className="addTask">
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" name='task' autoComplete='off' placeholder='Add Task' maxLength={25} value={tasks.name || ""}
//                         onChange={(e) => setTasks({ ...tasks, name: e.target.value })} />
//                     <button type='submit'>{tasks.id ? "Update" : "Add"}</button>
//                 </form>
//             </section>
//         </>
//     )
// }



