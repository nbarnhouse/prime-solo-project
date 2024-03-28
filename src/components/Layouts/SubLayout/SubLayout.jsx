import SideNavSub from '../../Navigation/SideNavSub/SideNavSub';

export default function SubLayout({ children }) {
  return (
    <div>
      <SideNavSub />
      <div>{children}</div>
    </div>
  );
}
