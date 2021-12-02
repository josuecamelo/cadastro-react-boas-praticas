import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] =  useState(0)

  const formularios = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={aoEnviar} />
  ];

  function proximo(){
    setEtapaAtual(etapaAtual + 1);
  }

  /*function formularioAtual(etapa) {
    switch(etapa){
      case 0:
        return <DadosUsuario aoEnviar={proximo} />;
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar} />;
      default:
        return <Typography>Erro</Typography>;
    };
  }*/

  return (
    <>
      { 
        //ao inves de chamar a função formularioAtual(etapaAtual),  usar array, isso para evitar 300 mil ifs e cases
        formularios[etapaAtual] 
      }
    </>
  );
}

export default FormularioCadastro;
