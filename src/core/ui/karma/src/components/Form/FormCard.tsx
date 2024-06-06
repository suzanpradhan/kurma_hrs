import { FormEventHandler } from 'react';

interface FormCardProps {
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
  className?: string;
}

const FormCards = ({ children, className }: FormCardProps) => {
  return (
    <form className={`border rounded-xl flex flex-col max-w-5xl ` + className}>
      {children}
    </form>
  );
};

export default FormCards;
