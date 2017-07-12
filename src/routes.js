import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
// const DefaultRoute = Router.DefaultRoute;
// var NotFoundRoute = Router.NotFoundRoute;
// var Redirect = Router.Redirect;
import App from './app';
import HomePage from './components/home/homePage';
import CoursePage from './components/course/CoursesPage';
import AboutPage from './components/about/AboutPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="courses" component={CoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
