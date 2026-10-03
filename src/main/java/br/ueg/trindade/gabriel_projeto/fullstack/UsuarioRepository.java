package br.ueg.trindade.gabriel_projeto.fullstack;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ueg.trindade.gabriel_projeto.fullstack.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
