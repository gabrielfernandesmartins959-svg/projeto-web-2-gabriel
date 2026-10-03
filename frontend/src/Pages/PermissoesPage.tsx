import PermissaoForm from "../components/PermissaoForm";
import PermissaoList from "../components/PermissaoList";

interface Permissao {
  id: number;
  nome: string;
  descricao: string;
}

interface PermissoesPageProps {
  onSalvo: () => void;
  permissaoEditando: Permissao | null;
  onCancelar: () => void;
  onEditar: (permissao: Permissao) => void;
  atualizacao: number;
}

function PermissoesPage({
  onSalvo,
  permissaoEditando,
  onCancelar,
  onEditar,
  atualizacao
}: PermissoesPageProps) {

  return (
    <div>

      <h2>Permissões</h2>

      <PermissaoForm
        onSalvo={onSalvo}
        permissaoEditando={permissaoEditando}
        onCancelar={onCancelar}
      />

      <hr />

      <PermissaoList
        onEditar={onEditar}
        atualizacao={atualizacao}
      />

    </div>
  );
}

export default PermissoesPage;