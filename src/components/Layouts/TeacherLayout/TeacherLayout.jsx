import SideNavTeacher from '../../Navigation/SideNavTeacher/SideNavTeacher';

export default function TeacherLayout({ children }) {
  return (
    <div>
      <SideNavTeacher />
      <div>{children}</div>
    </div>
  );
}
