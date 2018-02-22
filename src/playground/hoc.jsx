// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is:{props.info}</p>  
  </div>
);

const withAdminWarning = (WrapperComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.Please don't share!</p>}
      <WrapperComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrapperComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrapperComponent {...props} />
      ) : (
        <p>Please login to view the info</p>  
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info="There are the details." isAdmin={true}/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo info="There are the details." isAuthenticated={false}/>, document.getElementById('app'));