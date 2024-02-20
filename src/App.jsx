import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <div id="buttons-container">
        <button>C</button>
      </div>
    </div>
  );
}

export default App;
