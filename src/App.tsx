import "./styles/App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import Main from "./components/main/Main.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import { PageProvider } from "./contexts/PageContext.tsx";

function App() {
  return (
    <PageProvider>
      <div className="container">
        <Navbar />
        <Main />
        <Sidebar />
      </div>
    </PageProvider>
  );
}

export default App;
