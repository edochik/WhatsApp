import { InputMessage } from "../InputMessage/";
import { MessagePanel } from "../MessagePanel/";
import s from "./Chat.module.scss";

const Chat = () => {
  return (
    <div className={s.Chat}>
      <div className={s.wrapper}>
        <MessagePanel />
        <InputMessage />
      </div>
    </div>
  );
};

export { Chat };
