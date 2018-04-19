import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Profile = () => {
  return (
    <MuiThemeProvider>
      <Card>
        <CardHeader
          title="Jenny Vee 💁"
          subtitle="I like turtles and stuff"
          avatar="https://media.licdn.com/dms/image/C4D03AQHumbo5qqV3xw/profile-displayphoto-shrink_200_200/0?e=1529301600&v=beta&t=GY0DihayF9jdMmD7kJpKqEOw2nRkKWhdbecZPz1uNdY"
        />
        <CardMedia
          overlay={
            <CardTitle title="My backyard" subtitle="I wish it was lol" />
          }
        >
          <img src="https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    </MuiThemeProvider>
  );
};

export default Profile;
