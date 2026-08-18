function useTaskStats(tasks){
    let notCompleteTask = tasks.filter(task => task.completed==false)
    let total =tasks.length
    let remaning =notCompleteTask.length;
    let completed = total-remaning;
    return {total,remaning,completed}
}
export default useTaskStats