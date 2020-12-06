import React, { useRef } from 'react';
import { Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { className, duration, Router } from './styles';

const RouterSlide = ({ children }) => {
  const nodeRef = useRef(null);

  return (
    <Location>
      {({ location }) => (
        <TransitionGroup component={null}>
          <CSSTransition
            nodeRef={nodeRef}
            key={location.key}
            classNames={className}
            timeout={duration}
          >
            <div ref={nodeRef}>
              <Router location={location}>{children}</Router>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  );
};
export default RouterSlide;
