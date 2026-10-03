import { useEffect, useState } from "react";
import api from "../services/api";

interface Vendas {
  id: number;
  produto: string;
  quantidade: number;
  valor: number;
}

interface VendasFormProps {
  onSalvo: () => void;
  vendaEditando: Vendas | null;
  onCancelar: () => void;
}

function VendasForm({
  onSalvo,
  vendaEditando,
  onCancelar
}: VendasFormProps) {

  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);

  useEffect(() => {

    if (vendaEditando) {

      setProduto(vendaEditando.produto);
      setQuantidade(vendaEditando.quantidade);
      setValor(vendaEditando.valor);

    } else {

      setProduto("");
      setQuantidade(0);
      setValor(0);

    }

  }, [vendaEditando]);

  const salvar = async (e: React.FormEvent) => {

    e.preventDefault();

    if (produto.trim() === "") {
      alert("Informe o produto.");
      return;
    }

    if (Number(quantidade) <= 0) {
      alert("A quantidade deve ser maior que zero.");
      return;
    }

    if (Number(valor) <= 0) {
      alert("O valor deve ser maior que zero.");
      return;
    }

    try {

      const venda = {
        produto: produto,
        quantidade: Number(quantidade),
        valor: Number(valor)
      };

      if (vendaEditando) {

        await api.put(
          `/vendas/${vendaEditando.id}`,
          venda
        );

        alert("Venda atualizada com sucesso!");

      } else {

        await api.post("/vendas", venda);

        alert("Venda cadastrada com sucesso!");
      }

      setProduto("");
      setQuantidade(0);
      setValor(0);

      onSalvo();

    } catch (erro) {

      console.error(erro);

      alert("Erro ao salvar a venda.");
    }
  };

  return (
    <div>

      <h2>
        {vendaEditando ? "Editar Venda" : "Cadastrar Venda"}
      </h2>

      <form onSubmit={salvar}>

        <div>
          <label>Produto:</label>

          <input
            type="text"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Quantidade:</label>

          <input
            type="number"
            value={quantidade}
            onChange={(e) =>
              setQuantidade(Number(e.target.value))
            }
          />
        </div>

        <br />

        <div>
          <label>Valor:</label>

          <input
            type="number"
            step="0.01"
            value={valor}
            onChange={(e) =>
              setValor(Number(e.target.value))
            }
          />
        </div>

        <br />

        <button type="submit">
          {vendaEditando ? "Atualizar" : "Cadastrar"}
        </button>

        {vendaEditando && (
          <button
            type="button"
            onClick={onCancelar}
          >
            Cancelar
          </button>
        )}

      </form>

    </div>
  );
}

export default VendasForm;