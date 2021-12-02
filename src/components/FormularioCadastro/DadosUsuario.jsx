import React from "react";
import { TextField } from "@material-ui/core";

function DadosUsuario() {
  return (
    <form
    onSubmit={(event) => {
      event.preventDefault();
    }}
  >
    <TextField
      type="email"
      id="email"
      label="E-mail"
      variant="outlined"
      margin="normal"
      fullWidth
    />
  </form>
  );
}

export default DadosUsuario;
