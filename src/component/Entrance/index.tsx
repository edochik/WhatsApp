import s from "./Entrance.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import {
  InitialAuthState,
  updateAuth,
} from "../../redux/authSlice/authSlice.ts";
import { fetchCheckWhatsappThunk } from "../../redux/authSlice/fetchCheckWhatsappThunk.ts";

const Entrance = () => {
  const dispatch = useAppDispatch();
  const { idInstance, apiTokenInstance, error } = useAppSelector(
    (state) => state.authorization
  );
  const isEmptyAuth = [idInstance, apiTokenInstance]
    .map((value) => value.length)
    .some((value) => value === 0);

  const handleUpdateAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(updateAuth({ key: name as keyof InitialAuthState, value }));
  };

  const handleAuthorization = () => {
    dispatch(fetchCheckWhatsappThunk({ idInstance, apiTokenInstance }));
  };

  return (
    <form
      className={s.Entrance}
      onSubmit={(event) => {
        event.preventDefault();
        handleAuthorization();
      }}
    >
      <label className={s.label}>
        idInstance:
        <input
          className={s.input}
          value={idInstance}
          onChange={(e) => handleUpdateAuth(e)}
          type="text"
          name="idInstance"
        />
      </label>
      <label className={s.label}>
        apiTokenInstance:
        <input
          className={s.input}
          value={apiTokenInstance}
          onChange={(e) => handleUpdateAuth(e)}
          type="text"
          name="apiTokenInstance"
        />
      </label>
      {error && <div>{error}</div>}
      <button className={s.button} type="submit" disabled={isEmptyAuth}>
        Войти
      </button>
    </form>
  );
};

export { Entrance };
