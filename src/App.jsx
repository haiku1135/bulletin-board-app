import { useEffect,useState } from "react";
import './App.css';
// import { GetBulletin } from "./components/GetBulletin";

function App() {
  const [threads, setThreads] = useState();

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then(response => response.json())
      .then(data => {
        setThreads(data);
      })
  }, []);

  console.log(threads);

  return (
    <>
      <header>
        <h1>掲示板</h1>
      </header>
      <h1>新着スレッド</h1>
      <ul>
        {threads?.map(thread => {
          return (
            <li key={thread}>{thread.title}</li>
          )
        })}
      </ul>
    </>

  )
}

export default App
