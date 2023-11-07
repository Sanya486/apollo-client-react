import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { DELETE_CAR, GET_CARS } from "../../graphQL/queries";
import DeleteIcon from "@mui/icons-material/Delete";

import { useMutation, useQuery } from "@apollo/client";

const CarsList = () => {
  const { data, loading, error } = useQuery(GET_CARS, {
    pollInterval: 0,
  });
  const [deleteCar] = useMutation(DELETE_CAR);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handleDeleteBtn = (id) => {
    deleteCar({ variables: { id } });
  };
  return (
    <div className="wrapper">
      {data &&
        data.getCars.map(({ brand, model, color, id, horsePowers }) => (
          <Card className="card">
            <CardHeader>
              {brand}
              {model}
            </CardHeader>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Brand
              </Typography>
              <Typography>{brand}</Typography> <br />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Model
              </Typography>
              <Typography>{model}</Typography> <br />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Color
              </Typography>
              <Typography>{color}</Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Horse Powers
              </Typography>
              <Typography>{horsePowers}</Typography>
              <Button
                sx={{ position: "absolute", top: "16px", right: "16px", display: 'flex', justifyContent:'center' }}
                variant="outlined"
               
                onClick={() => handleDeleteBtn(id)}
              ><DeleteIcon/></Button>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default CarsList;
