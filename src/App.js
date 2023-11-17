import "./App.css";
import MonitoringContent from "./components/MonitoringContent";
import Sidepanel from "./components/Sidepanel";
function App() {
  return (
    <div className="App">
    <section className="flex">
      <Sidepanel/>
      <MonitoringContent/>
    </section>

    

    </div>
  );
}

export default App;
