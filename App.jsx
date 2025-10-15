import { useState } from "react";
import "./index.css";

function App() {
  const [task, setTask] = useState(""); // 入力中のタスク名
  const [due, setDue] = useState("");   // 入力中の期限
  const [tasks, setTasks] = useState([]); // タスク一覧
  const [sortBy, setSortBy] = useState("登録順"); // 並び替え選択

  // タスク追加
  const addTask = () => {
    if (task.trim() === "" || due === "") return;
    setTasks([...tasks, { text: task, done: false, due: due }]);
    setTask("");
    setDue("");
  };

  // タスク削除（確認付き）
  const removeTask = (index) => {
    if (window.confirm("本当に削除しますか？")) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  // タスク完了/未完了切替
  const toggleDone = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    );
    setTasks(newTasks);
  };

  // Enterキーで追加
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  // 並び替え
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === "登録順") return 0; // 登録順はそのまま
    return new Date(a.due) - new Date(b.due); // 期限順
  });

  return (
    <div className="todo-container">
      <h1>TODO リスト</h1>

      <div className="input-area">
        <input
          type="text"
          value={task}
          placeholder="タスクを入力"
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="date"
          value={due}
          onChange={(e) => setDue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTask}>追加</button>
      </div>

      <div className="sort-area">
        <label>並び替え: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option>登録順</option>
          <option>期限順</option>
        </select>
      </div>

      <ul>
        {sortedTasks.map((t, i) => (
          <li key={i} className={t.done ? "done" : ""}>
            <span onClick={() => toggleDone(i)}>
              {t.text} {t.due && <small>({t.due})</small>}
            </span>
            <button onClick={() => removeTask(i)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
