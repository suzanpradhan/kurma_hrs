import PageBar from '@/core/ui/karma/src/components/PageBar';

export default function AddNewSpotCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-[1200px]">
      <PageBar
        leading={
          <div className="text-base font-bold  text-dark-500">Add New</div>
        }
      ></PageBar>
      {children}
    </div>
  );
}
