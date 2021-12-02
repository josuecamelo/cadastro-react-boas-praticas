import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <TextField
        type="text"
        id="cep"
        label="CEP"
        variant="outlined"
        margin="normal"
      />

      <TextField
        type="text"
        id="endereco"
        label="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        type="number"
        id="numero"
        label="Número"
        variant="outlined"
        margin="normal"
      />

      <TextField
        type="text"
        id="estado"
        label="UF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        type="text"
        id="cidade"
        label="Cidade"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
