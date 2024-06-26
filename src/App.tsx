import { useEffect,useState, Fragment } from "react";
// import { GetBulletimpin } from "./components/GetBulletin";
import "./styles/globals.css";

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

  return (
    <>
      <header className="bg-blue-500 text-white p-4 text-6xl mb-4">
        <h1>掲示板</h1>
      </header>
      <h2 className="text-center text-3xl">新着スレッド</h2>
      <ul className="text-center flex flex-col gap-4 mb-10">
        {threads?.map(thread => {
          return (
            <li key={thread.id} className="text-2xl border max-w-[500px] mx-auto w-full p-4">{thread.title}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App
