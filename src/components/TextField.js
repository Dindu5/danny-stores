import { useFormContext, Controller } from "react-hook-form";

function TextField({ className, name, placeholder, type, id }) {
  const { control } = useFormContext();

  const Input = () => {
    <input />;
  };

  return (
    <div>
      <Controller
        as={Input}
        control={control}
        className={className}
        name={name}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}

export default TextField;
