import { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

//import TopMainNav from '../Navigation/TopMainNav/TopMainNav';
import SideNavSub from '../Navigation/SideNavSub/SideNavSub.jsx';
//import SideNavTeacher from '../Navigation/SideNavTeacher/SideNavTeacher.jsx';
import TopLoginNav from '../Navigation/TopLoginNav/TopLoginNav.jsx';

import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import ContactPage from '../ContactPage/ContactPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage.jsx';
import HomeSub from '../HomeSub/HomeSub.jsx';
import ScheduleSub from '../ScheduleSub/ScheduleSub.jsx';
import AvailabilitySub from '../AvailabilitySub/AvailabilitySub.jsx';
import HomeTeacher from '../HomeTeacher/HomeTeacher.jsx';
import ScheduleTeacher from '../ScheduleTeacher/ScheduleTeacher.jsx';
import AbsenceTeacher from '../AbsenceTeacher/AbsenceTeacher.jsx';
import RegisterPageRole from '../RegisterPageRole/RegisterPageRole.jsx';
import ProfilePageSub from '../ProfilePageSub/ProfilePageSub.jsx';
import ProfilePageTeacher from '../ProfilePageTeacher/ProfilePageTeacher.jsx';
// import CalendarView from '../Dates/CalendarView/CalendarView.jsx';
// import DatePicker from '../Dates/DatePicker/DatePicker.jsx';

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
        {/* <TopMainNav /> */}
        {/* <SideNavTeacher /> */}

        <TopLoginNav />
        <SideNavSub />

        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />
          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>
          {/* ------------- */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/contact"
          >
            <ContactPage />
          </Route>
          {/* ------------------------------------------------------------------------- */}

          <Route exact path="/registration">
            <RegistrationPage />
          </Route>

          <Route
            // logged in shows UserPage else shows LoginPage
            exact
            path="/role"
          >
            <RegisterPageRole />
          </Route>
          {/* ------------------------------------------------------------------------- */}
          {/* Component Testing */}

          {/* <Route exact path="/cal">
            <CalendarView />
          </Route>

          <Route exact path="/date">
            <DatePicker />
          </Route> */}

          {/* ------------------------------------------------------------------------- */}
          {/* Staging area for teacher/sub routes.  */}
          <Route exact path="/homesub">
            <HomeSub />
          </Route>
          <Route exact path="/schedulesub">
            <ScheduleSub />
          </Route>
          <Route exact path="/availabilitysub">
            <AvailabilitySub />
          </Route>
          <Route exact path="/hometeacher">
            <HomeTeacher />
          </Route>
          <Route exact path="/scheduleteacher">
            <ScheduleTeacher />
          </Route>
          <Route exact path="/absenceteacher">
            <AbsenceTeacher />
          </Route>
          {/* -------------------------------------------------------------------------
          ------------------------------------------------------------------------- */}
          {/* Staging area for teacher/sub profile and registration pages.  */}

          <Route exact path="/profilesub">
            <ProfilePageSub />
          </Route>

          <Route exact path="/profileteacher">
            <ProfilePageTeacher />
          </Route>

          {/* -------------------------------------------------------------------------
          ------------------------------------------------------------------------- */}
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegistrationPage />
            )}
          </Route>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
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
