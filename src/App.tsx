import "./assets/styles/App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <section className="container">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="main">
          <Main />
        </main>
      </section>
    </>
  );
}

export default App;
