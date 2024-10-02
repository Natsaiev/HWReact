import { Provider } from "react-redux";
import { User } from "./Components/User/User";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default App;