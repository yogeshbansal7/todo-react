import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="upper" >
      <div className="main">
        <Navbar />
        <TodoList />
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
