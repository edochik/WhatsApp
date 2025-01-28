import { Chat } from "../component/Chat";
import { Entrance } from "../component/Entrance/";
import "./App.module.scss";
import { useAppSelector } from "../redux/hooks.ts";

export interface Message {
  idMessage: string;
  message: string;
}

function App() {
  const { isAuthorized } = useAppSelector((state) => state.authorization);
  if (!isAuthorized) {
    return <Entrance />;
  }
  return <Chat />;
}

export default App;
