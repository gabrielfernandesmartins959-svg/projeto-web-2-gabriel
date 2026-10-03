import { useState } from "react";
import axios from "axios";

interface UsuarioFormProps {
  onSalvo: () => void;
}

function UsuarioForm({ onSalvo }: UsuarioFormProps) {

  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const salvar = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/usuarios", {
        nome: nome,
        username: username,
        email: email
      });

      alert("Usuário cadastrado com sucesso!");

      setNome("");
      setUsername("");
      setEmail("");

      onSalvo();

    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div>

      <h2>Cadastrar Usuário</h2>

      <form onSubmit={salvar}>

        <div>
          <label>Nome:</label>

          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Username:</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email:</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Cadastrar
        </button>

      </form>

    </div>
  );
}

export default UsuarioForm;