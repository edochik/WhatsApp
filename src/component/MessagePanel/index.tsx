import classNames from "classnames";
import { useAppSelector } from "../../redux/hooks.ts";
import s from "./MessagePanel.module.scss";

const MessagePanel = () => {
  const { messages } = useAppSelector((state) => state.messages);
  console.log(messages);
  return (
    <ul className={s.MessagePanel}>
      {messages.map((message) => {
        const { idMessage, textMessage, isOwnMessage } = message;
        return (
          <li
            className={classNames({
              [s.item]: true,
              [s.own_message]: isOwnMessage,
            })}
            key={idMessage}
          >
            <span className={s.message}>{textMessage}</span>
          </li>
        );
      })}
    </ul>
  );
};

export { MessagePanel };
