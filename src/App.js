import Search from "./components/Search/Search";
import Notifications from "./components/Notifications/Notifications";
import ButtonDispencer from "./components/ButtonDispencer/ButtonDispencer";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Menu from "./components/Menu/Menu";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="part1">
        <div>
          <Search />
        </div>
        <div>
          <Notifications />
        </div>
        <div>
          <ButtonDispencer />
        </div>
      </div>
      <div className="part2">
        <div>
          <RegistrationForm />
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
