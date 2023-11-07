import "./App.css";

import { Container } from "@mui/material";
import Header from "./components/Header/Header";

import AddCarForm from "./components/AddCarForm/AddCarForm";
import CarsList from "./components/CarsList/CarsList";

function App() {
  return (
    <Container sx={{ paddingTop: "100px" }}>
      <Header />
      <AddCarForm />
      <CarsList/>
    </Container>
  );
}

export default App;
