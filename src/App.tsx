import { useEffect,useState } from "react";
import './App.css';
// import { GetBulletin } from "./components/GetBulletin";

interface Thread {
  id: string; // または適切な型
  title: string;
}

function App() {
  const [threads, setThreads] = useState<Thread[]>();
  const BASE_URL = 'https://railway.bulletinboard.techtrain.dev';
  useEffect(() => {
    fetch(`${BASE_URL}/threads`)
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
            <li key={thread.id}>{thread.title}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App
