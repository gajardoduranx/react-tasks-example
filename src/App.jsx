import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default function App() {
  
  return (
    <main className="bg-zinc-800 h-screen">
      <div className="container mx-auto p-5">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
