import { useAppSelector } from "../../redux/hooks.ts";
import s from "./MessagePanel.module.scss";

const MessagePanel = () => {
  const { messages } = useAppSelector((state) => state.messages);
  return (
    <ul className={s.MessagePanel}>
      {messages.map((item) => {
        const { message } = item;
        return (
          <li className={s.item}>
            <span className={s.message}>{message}</span>
          </li>
        );
      })}
    </ul>
  );
};

export { MessagePanel };
