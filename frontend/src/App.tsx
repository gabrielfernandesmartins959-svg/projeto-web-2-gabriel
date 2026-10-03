import { useState } from "react";

import UsuarioForm from "./components/UsuarioForm";
import UsuarioList from "./components/UsuarioList";

import PermissoesPage from "./pages/PermissoesPage";

import VendasForm from "./components/VendasForm";
import VendasList from "./components/VendasList";

import { Usuario } from "./types/Usuario";

interface Permissao {
  id: number;
  nome: string;
  descricao: string;
}

interface Vendas {
  id: number;
  produto: string;
  quantidade: number;
  valor: number;
}

function App() {

  const [usuarioEditando, setUsuarioEditando] =
    useState<Usuario | null>(null);

  const [atualizacaoUsuario, setAtualizacaoUsuario] =
    useState(0);

  const [permissaoEditando, setPermissaoEditando] =
    useState<Permissao | null>(null);

  const [atualizacaoPermissao, setAtualizacaoPermissao] =
    useState(0);

  const [vendaEditando, setVendaEditando] =
    useState<Vendas | null>(null);

  const [atualizacaoVenda, setAtualizacaoVenda] =
    useState(0);


  const atualizarUsuarios = () => {
    setAtualizacaoUsuario((valor) => valor + 1);
    setUsuarioEditando(null);
  };

  const editarUsuario = (usuario: Usuario) => {
    setUsuarioEditando(usuario);
  };

  const cancelarEdicaoUsuario = () => {
    setUsuarioEditando(null);
  };


  const atualizarPermissoes = () => {
    setAtualizacaoPermissao((valor) => valor + 1);
    setPermissaoEditando(null);
  };

  const editarPermissao = (permissao: Permissao) => {
    setPermissaoEditando(permissao);
  };

  const cancelarEdicaoPermissao = () => {
    setPermissaoEditando(null);
  };


  const atualizarVendas = () => {
    setAtualizacaoVenda((valor) => valor + 1);
    setVendaEditando(null);
  };

  const editarVenda = (venda: Vendas) => {
    setVendaEditando(venda);
  };

  const cancelarEdicaoVenda = () => {
    setVendaEditando(null);
  };


  return (
    <div>

      <h1>Sistema de Usuários</h1>

      <UsuarioForm
        onSalvo={atualizarUsuarios}
        usuarioEditando={usuarioEditando}
        onCancelar={cancelarEdicaoUsuario}
      />

      <hr />

      <UsuarioList
        onEditar={editarUsuario}
        atualizacao={atualizacaoUsuario}
      />

      <hr />

      <PermissoesPage
        onSalvo={atualizarPermissoes}
        permissaoEditando={permissaoEditando}
        onCancelar={cancelarEdicaoPermissao}
        onEditar={editarPermissao}
        atualizacao={atualizacaoPermissao}
      />

      <hr />

      <VendasForm
        onSalvo={atualizarVendas}
        vendaEditando={vendaEditando}
        onCancelar={cancelarEdicaoVenda}
      />

      <hr />

      <VendasList
        onEditar={editarVenda}
        atualizacao={atualizacaoVenda}
      />

    </div>
  );
}

export default App;
