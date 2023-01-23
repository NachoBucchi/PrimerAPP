import React, { Component } from "react";
import { Grid, ListItem } from "@mui/material";

import Dish from "./dish.js";

export class Dishes extends Component {
  updateDish = (index, updatedName) => {
    this.props.onUpdateDish(index, updatedName);
  };

  render() {
    return (
      <Grid container spacing={1} direction="column" alignItems="center">
        <Grid>
          {" "}
          <ListItem>
            {this.props.data.dishes.map((dish, index) => (
              <Dish
                key={index}
                name={dish.name}
                ingredients={dish.ingredients}
                index={index}
                onUpdateDish={this.updateDish}
              />
            ))}
          </ListItem>
        </Grid>
      </Grid>
    );
  }
}

export default Dishes;
