package br.ueg.trindade.gabriel_projeto.fullstack.service;

import br.ueg.trindade.gabriel_projeto.fullstack.PermissaoRepository;
import br.ueg.trindade.gabriel_projeto.fullstack.model.Permissao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PermissaoService {

    @Autowired
    private PermissaoRepository permissaoRepository;

    public List<Permissao> listarTodos() {
        return permissaoRepository.findAll();
    }

    public Optional<Permissao> buscarPorId(Long id) {
        return permissaoRepository.findById(id);
    }

    public Permissao criar(Permissao permissao) {
        return permissaoRepository.save(permissao);
    }

    public Permissao atualizar(Long id, Permissao permissao) {
        permissao.setId(id);
        return permissaoRepository.save(permissao);
    }

    public void excluir(Long id) {
        permissaoRepository.deleteById(id);
    }
}