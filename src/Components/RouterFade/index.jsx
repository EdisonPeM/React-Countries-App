import React from 'react';
import { Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { className, duration, Router } from './styles';

const RouterSlide = ({ children }) => (
  <Location>
    {({ location }) => (
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames={className}
          timeout={duration}
        >
          <Router location={location}>{children}</Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

export default RouterSlide;
