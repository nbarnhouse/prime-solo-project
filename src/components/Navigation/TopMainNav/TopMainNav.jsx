import { Link } from 'react-router-dom';
// import LogOutButton from '../../Buttons/LogOutButton/LogOutButton';
import './TopMainNav.css';
import { useSelector } from 'react-redux';

function TopMainNav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link className="nav-title" to="/home">
        Home
      </Link>
      <Link className="nav-title" to="/about">
        About
      </Link>
      <Link className="nav-title" to="/contact">
        Contact
      </Link>

      <Link className="nav-title right" to="/login">
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          ></path>
        </svg>
        Login
      </Link>
    </div>
  );
}

export default TopMainNav;

// <div>
//   {/* If no user is logged in, show these links */}
//   {!user.id && (
//     // If there's no user, show login/registration links
//     <Link className="navLink" to="/login">
//       <img src="" alt="" />
//       Login
//     </Link>
//   )}

//   {/* If a user is logged in, show these links */}
//   {user.id && (
//     <>
//       <LogOutButton className="navLink" />
//     </>
//   )}
// </div>
