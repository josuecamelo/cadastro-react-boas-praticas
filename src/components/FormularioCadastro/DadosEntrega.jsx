import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        type="text"
        id="cep"
        label="CEP"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        type="text"
        id="endereco"
        label="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        type="number"
        id="numero"
        label="Número"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        type="text"
        id="estado"
        label="UF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
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
