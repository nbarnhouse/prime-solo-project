import { Link } from 'react-router-dom';
// import HomeTeacher from '../HomeTeacher/HomeTeacher.jsx';
// import ScheduleTeacher from '../ScheduleTeacher/ScheduleTeacher.jsx';
// import AbsenceTeacher from '../AbsenceTeacher/AbsenceTeacher.jsx';

import '../SideNav.css';

function SideNavTeacher() {
  return (
    <div className="content">
      <div className="navbar">
        <p>
          <Link to="/hometeacher">Home</Link>
        </p>
        <p>
          <Link to="/scheduleteacher">Schedule</Link>
        </p>
        <p>
          <Link to="/absenceteacher">Create Absence</Link>
        </p>
      </div>
    </div>
  );
}

export default SideNavTeacher;
