import React from 'react';
import { connect, styled } from "frontity";
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { useBootstrapPrefix } from './ThemeProvider';
import {
  BsPrefixPropsWithChildren,
  BsPrefixRefForwardingComponent,
} from './helpers';

export interface ContainerProps extends BsPrefixPropsWithChildren {
  fluid?: boolean | 'sm' | 'md' | 'lg' | 'xl';
}

type Container = BsPrefixRefForwardingComponent<'div', ContainerProps>;

const containerSizes = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
]);

const propTypes = {
  /**
   * @default 'container'
   */
  bsPrefix: PropTypes.string,

  /**
   * Allow the Container to fill all of its available horizontal space.
   * @type {(true|"sm"|"md"|"lg"|"xl")}
   */
  fluid: containerSizes,
  /**
   * You can use a custom element for this component
   */
  as: PropTypes.elementType,
};

const defaultProps = {
  fluid: false,
};

const Container: Container = React.forwardRef(
  (
    {
      bsPrefix,
      fluid,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = StyledComponent,
      className,
      ...props
    }: ContainerProps,
    ref,
  ) => {
    const prefix = useBootstrapPrefix(bsPrefix, 'container');
    const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';

    return (
      <Component
        ref={ref}
        {...props}
        className={classNames(className, fluid ? `${prefix}${suffix}` : prefix)}
      />
    );
  },
);

Container.displayName = 'Container';
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default connect(Container);

const StyledComponent = styled.div`

width: 100%;
padding-right: 1rem;
padding-left: 1rem;
margin-right: auto;
margin-left: auto;



  /* --- RESPONSIVE --- */
  /* Small devices (landscape phones, 576px and up) */
  /* Medium devices (tablets, 768px and up)  */
  /* Large devices (desktops, 992px and up) */
  /* Extra large devices (large desktops, 1200px and up) */

  @media screen and (min-width: 576px) {
    .container { max-width: 540px; }
  }
  @media screen and (min-width: 768px) {
    .container { max-width: 720px; }
  }
  @media screen and (min-width: 992px) {
    .container { max-width: 960px; }
  }
  @media screen and (min-width: 1200px) {
    .container { max-width: 1140px; }
  }

`;

// Based on: 
// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Container.tsx
// 04/09/2020

// Refs:
// https://github.com/janczizikow/emotion-flex/blob/master/src/Container.ts
// https://github.com/bwarner/emotion-react-bootstrap/blob/master/lib/layout/container.js