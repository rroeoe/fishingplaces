import React from "react";

//Local Files
import { useAPI } from "../Services/APIContextProvider";
import PrimaryButton from "../Assets/PrimaryButton"

//React Router
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Cards() {
  const { airtableData } = useAPI();
  let params = useParams();
  let selectedData = airtableData.find(element => element.id === params.CardID)


  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
        <Typography variant="h3">{selectedData.fields.name}</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="h6">{selectedData.fields.properties}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
          component="img"
          sx={{
            maxHeight: { xs: 233, md: 600 },
            maxWidth: { xs: 350, md: 600 },
          }}
          alt="The house from the offer."
          src={selectedData.fields.picture}
        />
        </Grid>
        <Grid item xs={12} md={4}>
        <Box
          sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          maxHeight: { xs: 233, md: 600 },
            maxWidth: { xs: 350, md: 600 },
        },
      }} >
          <Paper 
            elevation={3} 
            variant="outlined" 
            sx={{
              width: 200, 
              heigth: 400,
              }}/>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography variant="h6">{selectedData.fields.description}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>{selectedData.fields.description}</Typography>
          <Link to="/">
          <PrimaryButton
          />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
