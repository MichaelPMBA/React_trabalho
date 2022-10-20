
import React, { PureComponent } from "react";

class HeaderAction extends PureComponent {
  render() {
    return (
      <section className="block block-gradient">
        <div className="wrapper">
          <h2 className="title">Criar conta</h2>
          <h3 className="subtitle">Vamos criar seu cadastro</h3>
          <p>Ainda não tem conta? Preencha os campos abaixo.</p>
        </div>
      </section>
    );
  }
}

export default HeaderAction;