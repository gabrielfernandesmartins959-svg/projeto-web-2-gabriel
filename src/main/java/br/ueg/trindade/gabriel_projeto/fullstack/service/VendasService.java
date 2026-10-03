package br.ueg.trindade.gabriel_projeto.fullstack.service;



import br.ueg.trindade.gabriel_projeto.fullstack.model.Vendas;
import br.ueg.trindade.gabriel_projeto.fullstack.repository.VendasRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VendasService {

    @Autowired
    private VendasRepository vendasRepository;

    public List<Vendas> listarTodos() {
        return vendasRepository.findAll();
    }

    public Optional<Vendas> buscarPorId(Long id) {
        return vendasRepository.findById(id);
    }

    public Vendas criar(Vendas venda) {

        if (venda.getQuantidade() <= 0) {
            throw new IllegalArgumentException(
                    "A quantidade deve ser maior que zero."
            );
        }

        if (venda.getValor() <= 0) {
            throw new IllegalArgumentException(
                    "O valor deve ser maior que zero."
            );
        }

        return vendasRepository.save(venda);
    }

    public Vendas atualizar(Long id, Vendas venda) {

        if (venda.getQuantidade() <= 0) {
            throw new IllegalArgumentException(
                    "A quantidade deve ser maior que zero."
            );
        }

        if (venda.getValor() <= 0) {
            throw new IllegalArgumentException(
                    "O valor deve ser maior que zero."
            );
        }

        venda.setId(id);

        return vendasRepository.save(venda);
    }

    public void excluir(Long id) {
        vendasRepository.deleteById(id);
    }
}