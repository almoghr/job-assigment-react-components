import Search from "./components/Search/Search";
import Notifications from "./components/Notifications/Notifications";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <div>
        <Search />
      </div>
      <div>
      <Notifications />
      </div>  
    </div>
  );
}

export default App;
