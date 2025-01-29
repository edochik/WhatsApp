import { Chat } from "../component/Chat";
import { Authorization } from "../component/Authorization/index.tsx";
import { useAppSelector } from "../redux/hooks.ts";

function App() {
  const { isStateInstance } = useAppSelector((state) => state.authorization);
  if (!isStateInstance) {
    return <Authorization />;
  }
  return <Chat />;
}

export default App;
