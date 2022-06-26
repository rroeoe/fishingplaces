import React from "react";
import { useAPI } from "../Services/APIContextProvider";
import { Link, Outlet } from "react-router-dom";

//Local Imports
import PrimaryButton from "../Assets/PrimaryButton"

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export default function Cards() {
  const { airtableData } = useAPI();
  console.log(airtableData);

  return (
    <div>
    <Container>
    <Grid container spacing={2}>
    {airtableData.map(props => (
      <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.fields.picture}
          alt={props.fields.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.fields.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.fields.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
        
        <Link
            to={`/${props.id}`}
            key={props.id}
          >
          <PrimaryButton />
          </Link>
          <Outlet />
      </CardActions>
    </Card>
    </Grid>
    
    ))}
    </Grid>
    </Container>
   </div>
  );
}
