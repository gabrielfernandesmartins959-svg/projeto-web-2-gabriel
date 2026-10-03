import { useEffect, useState } from "react";
import api from "../services/api";

interface Vendas {
  id: number;
  produto: string;
  quantidade: number;
  valor: number;
}

interface VendasListProps {
  onEditar: (venda: Vendas) => void;
  atualizacao: number;
}

export default function VendasList({
  onEditar,
  atualizacao
}: VendasListProps) {

  const [vendas, setVendas] = useState<Vendas[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const carregarVendas = () => {

    setLoading(true);
    setErro("");

    api
      .get("/vendas")
      .then((response) => {

        setVendas(response.data);
        setLoading(false);

      })
      .catch((error) => {

        console.error(error);
        setErro("Erro ao carregar as vendas.");
        setLoading(false);

      });
  };

  useEffect(() => {

    carregarVendas();

  }, [atualizacao]);

  const excluir = async (id: number) => {

    const confirmar = window.confirm(
      "Tem certeza que deseja excluir esta venda?"
    );

    if (!confirmar) {
      return;
    }

    try {

      await api.delete(`/vendas/${id}`);

      alert("Venda excluída com sucesso!");

      carregarVendas();

    } catch (error) {

      console.error(error);
      alert("Erro ao excluir venda.");

    }
  };

  if (loading) {
    return <p>Carregando vendas...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <div>

      <h2>Lista de Vendas</h2>

      {vendas.map((venda) => (

        <div key={venda.id}>

          <p>
            <strong>Produto:</strong> {venda.produto}
          </p>

          <p>
            <strong>Quantidade:</strong> {venda.quantidade}
          </p>

          <p>
            <strong>Valor:</strong> R$ {venda.valor}
          </p>

          <button
            onClick={() => onEditar(venda)}
          >
            Editar
          </button>

          {" "}

          <button
            onClick={() => excluir(venda.id)}
          >
            Excluir
          </button>

          <hr />

        </div>

      ))}

    </div>
  );
}