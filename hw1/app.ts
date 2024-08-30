// 1. Create Task
type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
};

// 2. Tasks array
let tasks: Task[] = [];

let currentId = 1;

// 3. Tasks management functions
const addTask = (title: string, description: string): void => {
    const newTask: Task = {
        id: currentId++,
        title,
        description,
        completed: false,
    };
    tasks.push(newTask);
    console.log(`Task added: ${newTask.title}`);
};

// 3.1 Task removing function
const removeTask = (id: number): void => {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Task with ID ${id} removed`);
};

// 3.2 Task completion marking function
const markTaskAsCompleted = (id: number): void => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
        console.log(`Task with ID ${id} marked as completed`);
    } else {
        console.log(`Task with ID ${id} not found`);
    }
};

// 3.3 All tasks print function
const listTasks = (): void => {
    console.log('List of all tasks:');
    tasks.forEach(task => {
        console.log(
            `ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed ? 'Yes' : 'No'}`
        );
    });
};

// 3.4 Completed tasks print function
const listCompletedTasks = (): void => {
    console.log('List of completed tasks:');
    tasks
        .filter(task => task.completed)
        .forEach(task => {
            console.log(`ID: ${task.id}, Title: ${task.title}`);
        });
};

// 3.5 Uncompleted tasks print function
const listPendingTasks = (): void => {
    console.log('List of pending tasks:');
    tasks
        .filter(task => !task.completed)
        .forEach(task => {
            console.log(`ID: ${task.id}, Title: ${task.title}`);
        });
};

// 4. TESTING:

addTask('Buy groceries', 'Buy bread, milk, and eggs');
addTask('Finish project', 'Complete the final module');
addTask('Go to the gym', 'Workout at 6:00 PM');

listTasks();

markTaskAsCompleted(2);

removeTask(3);

listTasks();

listCompletedTasks();

listPendingTasks();
