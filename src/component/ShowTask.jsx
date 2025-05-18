import React from 'react'

export default function ShowTask({ setTask, TaskList, setTaskList }) {
    function handleEdit(id) {
        const selectedTask = TaskList.find((todo) => todo.id === id);
        setTask(selectedTask);
    }
    function handleDelete (id) {
        const updatedTaskList = TaskList.filter((todo) => todo.id != id);
        setTaskList(updatedTaskList);
    }
    return (
        <>
            <section className="showTask">
                <div className="head">
                    <div>
                        <span className='title'>Todo</span>
                        <span className='count'>{TaskList.length}</span>
                    </div>
                    <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
                </div>
                <ul>
                    {TaskList.map((todo) => (
                        <li key={todo.id}>
                            <p>
                                <span>{todo.name}</span>
                                <span>{todo.Time}</span>
                            </p>
                            <i className='bi bi-pencil-square' onClick={() => handleEdit(todo.id)}></i>
                            <i className='bi bi-trash' onClick={() => handleDelete(todo.id)}></i>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}







// import React from 'react'

// export default function ShowTask({ tasks, setTasks, taskList, setTaskList }) {
//     const handleClearAll = () => {
//         setTasks([]);
//     };
//     // // const handleUpdate = (e) => {
        
//     // // };
//     // // const handleDelete = (e) => {
//     // //     const taskId = e.target.parentElement.id;
//     // //     setTasks(tasks.filter(task => task.id !== parseInt(taskId)));
//     // // }

//     // const handleUpdate = (id) => {
//     //     const updatedTasks = tasks.map((task) => {
//     //         if (task.id === id) {
//     //             return { ...task, name: taskList };
//     //         }
//     //         return task;
//     //     });
//     //     setTasks(updatedTasks);
//     // }
//     // const handleDelete = (id) => {
//     //     const updatedTasks = tasks.filter((task) => task.id !== id);
//     //     setTasks(updatedTasks);
//     // };

//     function handleUpdate(id) {
//         const selectedTask = taskList.find((todo) => todo.id === id);
//         setTasks(selectedTask);
//     }
//     function handleDelete (id) {
//         const updatedTaskList = taskList.filter((todo) => todo.id != id);
//         setTaskList(updatedTaskList);
//     }


//     return (
//         <>
//             <section className='showTask'>
//                 <div className='head'>
//                     <div>
//                     <span className='title'>ToDo's</span>
//                     <span className='count'>{tasks.length}</span>
//                     </div>
//                     <button className='clearAll' onClick={handleClearAll} >Clear All</button>
//                 </div>
//                 <ul>
//                     {
//                         taskList.map((task) => (
//                                 <li key={task.id}>
//                                     <p>
//                                         <span>{task.name}</span>
//                                         <span>{task.date}</span>
//                                     </p>
//                                     <i className='bi bi-pencil-square' onClick={() => handleUpdate(task.id)}></i>
//                                     <i className='bi bi-trash' onClick={() => handleDelete(task.id)}></i>
//                                 </li>
//                             )
//                         )
//                     }
//                 </ul>
//             </section>
//         </>
//     )
// }
