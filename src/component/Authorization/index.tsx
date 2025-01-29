import s from "./Authorization.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { updateAuth } from "../../redux/authSlice/authSlice.ts";
import { fetchStateInstanceThunk } from "../../redux/authSlice/fetchStateInstanceThunk.ts";
import { InitialAuthState } from "../../redux/authSlice/authSlice.interface.ts";

const Authorization = () => {
  const dispatch = useAppDispatch();
  const { idInstance, apiTokenInstance, phoneNumber, error } = useAppSelector(
    (state) => state.authorization
  );

  const isEmptyAuth = [idInstance, apiTokenInstance, phoneNumber]
    .map((value) => value.length)
    .some((value) => value === 0);

  const handleUpdateAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(updateAuth({ key: name as keyof InitialAuthState, value }));
  };

  const handleAuthorization = () => {
    if (phoneNumber.length === 11) {
      dispatch(fetchStateInstanceThunk({ idInstance, apiTokenInstance }));
    }
  };

  return (
    <form
      className={s.Authorization}
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
      <label className={s.label}>
        phone:
        <input
          className={s.input}
          value={phoneNumber}
          onChange={(e) => handleUpdateAuth(e)}
          type="text"
          name="phoneNumber"
        />
      </label>
      {error && <div>{error}</div>}
      <button className={s.button} type="submit" disabled={isEmptyAuth}>
        Войти
      </button>
    </form>
  );
};

export { Authorization };
