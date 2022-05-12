import React from "react";
import useSWR from "swr";
import Card from "./Card";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Dogs() {
  const { data, error } = useSWR(
    "https://api.thedogapi.com/v1/images/search",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>loading .... </div>;
  let id = "";
  let image = "";
  let name = "";
  let temperament = "";
  let bred_for = "";

  try {
    var resultData = data[0].breeds[0];
    id = resultData.id;
    image = data[0].url;
    name = resultData.name;
    temperament = resultData.temperament;
    bred_for = resultData.bred_for;
  } catch (error) {
    id = data[0].id;
    image = data[0].url;
    name = "oops! We couldn't find the breed :'c ";
  }

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={6} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
          <Grid item xs={2.5}>
            <Item>
              <Card
                id={id}
                image={image}
                name={name}
                temperament={temperament}
                bred_for={bred_for}
              ></Card>
            </Item>
          </Grid>
          <Grid item xs={2.5}>
            <Item>
              <Card
                id={id}
                image={image}
                name={name}
                temperament={temperament}
                bred_for={bred_for}
              ></Card>
            </Item>
          </Grid>
        </Grid>

        <div>
          <Button variant="outlined" onClick={() => window.location.reload()}>
            Reload
          </Button>
        </div>
      </Box>
    </>
  );
}
