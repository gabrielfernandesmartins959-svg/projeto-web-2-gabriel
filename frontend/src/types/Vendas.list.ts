import { useEffect, useState } from "react";
import api from "../services/api";
import { Venda } from "../types/Venda";

export default function VendasList() {
  const [vendas, setVendas] = useState<Venda[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    api
      .get("/vendas")
      .then((response) => {
        setVendas(response.data);
        setLoading(false);
      })
      .catch(() => {
        setErro("Erro ao carregar as vendas.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando vendas...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <div>
      <h2>Lista de Vendas</h2>

      {vendas.length === 0 ? (
        <p>Nenhuma venda encontrada.</p>
      ) : (
        vendas.map((venda) => (
          <div key={venda.id}>
            <p>
              <strong>ID:</strong> {venda.id}
            </p>

            <p>
              <strong>Produto:</strong> {venda.produto}
            </p>

            <p>
              <strong>Quantidade:</strong> {venda.quantidade}
            </p>

            <p>
              <strong>Valor:</strong> R$ {venda.valor.toFixed(2)}
            </p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}