import { Button } from '@/core/ui/karma/src/components';
import FormCard from '@/core/ui/karma/src/components/Forms/FormCard';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="absolute p-7 font-bold">New Employee</div>
      <div className="">
        <Button />
        <FormCard />
      </div>
      <div>{children}</div>
    </>
  );
}
