import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

const Profile = () => {
  return (
      <MuiThemeProvider>
          <RaisedButton label="Primary"/>

      </MuiThemeProvider>
  );
};

export default Profile;
