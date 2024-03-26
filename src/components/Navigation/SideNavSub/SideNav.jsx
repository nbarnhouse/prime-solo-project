import { Link } from 'react-router-dom';

import '../SideNav.css';

function SideNavSub() {
  return (
    <div>
      <p>
        <Link to="/homesub">Home</Link>
      </p>
      <p>
        <Link to="/schedulesub">Schedule</Link>
      </p>
      <p>
        <Link to="/availabilitysub">Availability</Link>
      </p>
    </div>
  );
}

export default SideNavSub;
