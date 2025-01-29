import s from "./InputField.module.scss";

interface InputFieldProps {
  textLabel: string;
  name: string;
  type: string;
  value: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  maxLength?: number;
}

const InputField = ({
  textLabel,
  name,
  value,
  type,
  onChange,
  required,
  minLength,
  maxLength,
}: InputFieldProps) => {
  return (
    <label className={s.label}>
      {textLabel}:
      <input
        className={s.input}
        value={value}
        onChange={(e) => onChange(e)}
        type={type}
        name={name}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
    </label>
  );
};

export { InputField };
