import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="calculator">
      <input type="text" id="display" />
      <div id="buttons-container">
        <button>C</button>
      </div>
    </div>
  );
}

export default App;
