package br.ueg.trindade.gabriel_projeto.fullstack.controller;

import br.ueg.trindade.gabriel_projeto.fullstack.model.Permissao;
import br.ueg.trindade.gabriel_projeto.fullstack.service.PermissaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/permissoes")
@CrossOrigin(origins = "*")
public class PermissaoController {

    @Autowired
    private PermissaoService permissaoService;

    @GetMapping
    public List<Permissao> listarPermissoes() {
        return permissaoService.listarTodos();
    }

    @GetMapping("/{id}")
    public Permissao buscarPermissao(@PathVariable Long id) {
        return permissaoService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public Permissao criarPermissao(@RequestBody Permissao permissao) {
        return permissaoService.criar(permissao);
    }

    @PutMapping("/{id}")
    public Permissao atualizarPermissao(
            @PathVariable Long id,
            @RequestBody Permissao permissao) {

        return permissaoService.atualizar(id, permissao);
    }

    @DeleteMapping("/{id}")
    public void excluirPermissao(@PathVariable Long id) {
        permissaoService.excluir(id);
    }
}