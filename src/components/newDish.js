import React, { Component } from "react";
import { Fab, TextField } from "@mui/material/";

import AddIcon from "@mui/icons-material/Add";

class NewDish extends Component {
  //   constructor() {
  //     super();
  //     this.addDish = this.addDish.bind(this);
  //   }

  newDish = React.createRef();

  addDish = (event) => {
    console.log("Agregar Platillo");
    event.preventDefault();
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.addDish} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        {/* <input ref={this.newDish} /> */}
        <TextField
          label="Platillo..."
          type="text"
          margin="normal"
          variant="outlined"
          inputRef={(e) => (this.newDish = e)}
        />
        <Fab
          sx={{ ml: 2 }}
          color="Primary"
          size="small"
          className="dish-form-icon"
          variant="contained"
          onClick={this.addDish}
        >
          <AddIcon />
        </Fab>
      </form>
    );
  }
}

export default NewDish;
