import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query Query {
    getCars {
      model
      id
      horsePowers
      color
      createdDate
      brand
    }
  }
`;

export const ADD_CAR = gql`
  mutation CreateCar(
    $brand: String!
    $model: String!
    $color: String
    $horsePowers: String
  ) {
    createCar(
      brand: $brand
      model: $model
      color: $color
      horsePowers: $horsePowers
    ) {
      model
      id
      horsePowers
      color
      brand
    }
  }
`;

export const DELETE_CAR = gql`
  mutation DeleteCar($id: ID!) {
    deleteCar(id: $id) {
      id
    }
  }
`;
