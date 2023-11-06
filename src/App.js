import "./App.css";
import Columns from "./Components/columnsArea";
import Header from "./header/headerCreator";

function App() {
  return (
    <section className="app-content" key={Math.random()}>
      <Header />
      <Columns />
    </section>
  );
}

export default App;
