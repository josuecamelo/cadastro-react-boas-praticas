import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario({aoEnviar}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}
    >
      <TextField
        type="email"
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <TextField
        type="password"
        id="senha"
        label="Senha"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
