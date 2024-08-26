import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateList from "./component/CreateList";
import DisplayList from "./component/DisplayList";

function App() {
  return (
    <div>
      <div className="title">
        <h1>🌀 Go-To List 🌀</h1>
      </div>
      <div className="container">
        <div className="container-left">
          <CreateList />
        </div>
        <div className="container-right">
          <DisplayList />
        </div>
      </div>
    </div>
  );
}

export default App;
