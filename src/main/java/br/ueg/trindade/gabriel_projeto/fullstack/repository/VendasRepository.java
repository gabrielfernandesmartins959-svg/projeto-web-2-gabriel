package br.ueg.trindade.gabriel_projeto.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ueg.trindade.gabriel_projeto.fullstack.model.Vendas;

public interface VendasRepository extends JpaRepository<Vendas, Long> {
}