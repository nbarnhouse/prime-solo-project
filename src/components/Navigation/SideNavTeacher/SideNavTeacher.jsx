import { Link } from 'react-router-dom';

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
