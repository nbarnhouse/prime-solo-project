import React from 'react';
import { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// import AboutPage from '../IntroPages/AboutPage/AboutPage.jsx';
import UserPage from '../UserPage/UserPage';
// import ContactPage from '../IntroPages/ContactPage/ContactPage.jsx';
import LandingPage from '../IntroPages/LandingPage/LandingPage.jsx';

import LoginPage from '../LoginPage/LoginPage';

import RegistrationPage from '../RegistrationPage/RegistrationPage.jsx';
import RegisterPageRole from '../RegisterPageRole/RegisterPageRole.jsx';
import ProfilePageSub from '../ProfilePageSub/ProfilePageSub.jsx';
import ProfilePageTeacher from '../ProfilePageTeacher/ProfilePageTeacher.jsx';

import HomeSub from '../SubPages/HomeSub/HomeSub.jsx';
import ScheduleSub from '../SubPages/ScheduleSub/ScheduleSub.jsx';
import ScheduleSubCal from '../SubPages/ScheudleSubCal/ScheduleSubCal.jsx';
import AvailabilitySub from '../SubPages/AvailabilitySub/AvailabilitySub.jsx';

import HomeTeacher from '../TeacherPages/HomeTeacher/HomeTeacher.jsx';
import ScheduleTeacher from '../TeacherPages/ScheduleTeacher/ScheduleTeacher.jsx';
import AbsenceTeacher from '../TeacherPages/AbsenceTeacher/AbsenceTeacher.jsx';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // const request = useSelector((store) => store.request);
  // const availability = useSelector((store) => store.availability);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: 'FETCH_WEATHER' });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: 'FETCH_ROLE' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <Redirect
            exact
            from="/"
            to="/home" //Will redirect from / to /home
          />
          {/* <Route
            exact
            path="/about" // shows About Page (logged in or not)
          >
            <AboutPage />
          </Route> */}
          {/* <Route
            exact
            path="/contact" // shows Contact Page at all times (logged in or not)
          >
            <ContactPage />
          </Route> */}

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

          <ProtectedRoute exact path="/availabilitysub">
            <AvailabilitySub />
          </ProtectedRoute>

          {/* -------------------------------------------------------------------------
          ------------------------------------------------------------------------- */}
          {/* Staging area for teacher/sub routes.  */}

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
          <ProtectedRoute exact path="/schedulesubcal">
            <ScheduleSubCal />
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
            {/* Render the login page */}
            <LoginPage />
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them based on their role
              (() => {
                switch (user.type) {
                  case 'teacher':
                    return <Redirect to="/hometeacher" />;
                  case 'substitute':
                    return <Redirect to="/homesub" />;
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
      </div>
    </Router>
  );
}

export default App;
