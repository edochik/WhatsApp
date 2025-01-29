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
    if (name === "phoneNumber" && !/^\d*$/.test(value)) {
      return;
    }
    dispatch(updateAuth({ key: name as keyof InitialAuthState, value }));
  };

  const handleAuthorization = () => {
    dispatch(fetchStateInstanceThunk({ idInstance, apiTokenInstance }));
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
          required
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
          required
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
          minLength={11}
          maxLength={11}
          required
          onInvalid={(e) => {
            const target = e.target as HTMLInputElement;
            target.setCustomValidity("");
            if (!target.validity.valid) {
              target.setCustomValidity("Пример : 79601114455");
            }
          }}
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
