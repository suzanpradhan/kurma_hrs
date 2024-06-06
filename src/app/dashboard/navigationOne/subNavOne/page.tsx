import Button from '@/core/ui/karma/src/components/Button';
import SideBarNavGroup from '@/core/ui/karma/src/components/SideBar/SideBarNavGroup';
import SideBarNavLink from '@/core/ui/karma/src/components/SideBar/SideBarNavLink';

export function generateMetadata() {
  return {
    title: 'Navigaiton Sub Nav One',
    description: 'Sub Nav One ....',
  };
}
const page = () => {
  return (
    <>
      <SideBarNavGroup />
      <Button />
      <hr className="relative bottom-4" />
      <SideBarNavLink />
    </>
  );
};

export default page;
