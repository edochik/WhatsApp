import s from "./InputField.module.scss";

interface InputFieldProps {
  text: string;
  type: string;
  value: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  text,
  value,
  type,
  onChange,
  required,
}: InputFieldProps) => {
  return (
    <label className={s.label}>
      {text}:
      <input
        className={s.input}
        value={value}
        onChange={(e) => onChange(e)}
        type={type}
        name={text}
        required={required}
      />
    </label>
  );
};

export { InputField };
