import { TextField } from "@mui/material/";

type TextFieldProps = {
  id: string;
  name: string;
  label: string;
  required: boolean;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextFieldMui = ({
  id,
  name,
  label,
  required = true,
  disabled = false,
  onChange,
}: TextFieldProps) => {
  return (
    <TextField
      margin="normal"
      required={required}
      disabled={disabled}
      fullWidth
      id={id}
      name={name}
      label={label}
      autoComplete={name}
      autoFocus
      onChange={onChange}
    />
  );
};

export default TextFieldMui;
