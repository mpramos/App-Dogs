import React from "react";
import MediaCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Card({ id, image, name, temperament, bred_for }) {
  return (
    <>
      <MediaCard sx={{ maxWidth: 345 }}>
        <CardMedia 
          component="img"
          // height="540"
          image={image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>
             ID : {id}
            </div> 
            <div>
            TEMPERAMENT :{temperament}
            </div>
            <div>
            BRED FOR :{bred_for}
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </MediaCard>
    </>
  );
}

export default Card;
