import { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import TopMainNav from '../Navigation/TopMainNav/TopMainNav';
import SideNavSub from '../Navigation/SideNavSub/SideNavSub.jsx';
import SideNavTeacher from '../Navigation/SideNavTeacher/SideNavTeacher.jsx';
import TopLoginNav from '../Navigation/TopLoginNav/TopLoginNav.jsx';

import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import ContactPage from '../ContactPage/ContactPage';
import LandingPage from '../LandingPage/LandingPage';

import LoginPage from '../LoginPage/LoginPage';

import RegistrationPage from '../RegistrationPage/RegistrationPage.jsx';
import RegisterPageRole from '../RegisterPageRole/RegisterPageRole.jsx';
import ProfilePageSub from '../ProfilePageSub/ProfilePageSub.jsx';
import ProfilePageTeacher from '../ProfilePageTeacher/ProfilePageTeacher.jsx';

import HomeSub from '../HomeSub/HomeSub.jsx';
import ScheduleSub from '../ScheduleSub/ScheduleSub.jsx';
import AvailabilitySub from '../AvailabilitySub/AvailabilitySub.jsx';

import HomeTeacher from '../HomeTeacher/HomeTeacher.jsx';
import ScheduleTeacher from '../ScheduleTeacher/ScheduleTeacher.jsx';
import AbsenceTeacher from '../AbsenceTeacher/AbsenceTeacher.jsx';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <TopMainNav />
        {/* <SideNavTeacher /> */}
        {/* <TopLoginNav /> */}
        {/* <SideNavSub /> */}

        <Switch>
          <Redirect
            exact
            from="/"
            to="/home" //Will redirect from / to /home
          />
          <Route
            exact
            path="/about" // shows About Page (logged in or not)
          >
            <AboutPage />
          </Route>
          <Route
            exact
            path="/contact" // shows Contact Page at all times (logged in or not)
          >
            <ContactPage />
          </Route>

          <Route
            exact
            path="/registration" // shows Registration Page at all times (logged in or not)
          >
            <RegistrationPage />
          </Route>
          <ProtectedRoute
            exact
            path="/user" //  shows User Page (logged in)
          >
            <UserPage />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path="/homesub" // shows Sub Home Page (logged in)
          >
            <HomeSub />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path="/schedulesub" // shows Teacher Home Page (logged in)
          >
            <ScheduleSub />
          </ProtectedRoute>

          {/* -------------------------------------------------------------------------
          ------------------------------------------------------------------------- */}
          {/* Staging area for teacher/sub routes.  */}

          <ProtectedRoute exact path="/availabilitysub">
            <AvailabilitySub />
          </ProtectedRoute>
          <ProtectedRoute exact path="/hometeacher">
            <HomeTeacher />
          </ProtectedRoute>
          <ProtectedRoute exact path="/scheduleteacher">
            <ScheduleTeacher />
          </ProtectedRoute>
          <ProtectedRoute exact path="/absenceteacher">
            <AbsenceTeacher />
          </ProtectedRoute>
          {/* -------------------------------------------------------------------------
          ------------------------------------------------------------------------- */}
          {/* Staging area for teacher/sub profile and registration pages.  */}

          <ProtectedRoute exact path="/profilesub">
            <ProfilePageSub />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profileteacher">
            <ProfilePageTeacher />
          </ProtectedRoute>
          <ProtectedRoute exact path="/role">
            <RegisterPageRole />
          </ProtectedRoute>
          {/* -------------------------------------------------------------------------
          ------------------------------------------------------------------------- */}
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them based on their role
              (() => {
                switch (user.type) {
                  case 'teacher':
                    return <Redirect to="/profileteacher" />;
                  case 'substitute':
                    return <Redirect to="/profilesub" />;
                  default:
                    return <Redirect to="/user" />; // Default to a generic profile page
                }
              })()
            ) : (
              // Otherwise, show the registration page
              <RegistrationPage />
            )}
          </Route>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect them based on their role
              (() => {
                switch (user.type) {
                  case 'teacher':
                    return <Redirect to="/profileteacher" />;
                  case 'substitute':
                    return <Redirect to="/profilesub" />;
                  default:
                    return <Redirect to="/user" />; // Default to a generic profile page
                }
              })()
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them based on their role
              (() => {
                switch (user.type) {
                  case 'teacher':
                    return <Redirect to="/profileteacher" />;
                  case 'substitute':
                    return <Redirect to="/profilesub" />;
                  default:
                    return <Redirect to="/user" />; // Default to a generic profile page
                }
              })()
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>
          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
