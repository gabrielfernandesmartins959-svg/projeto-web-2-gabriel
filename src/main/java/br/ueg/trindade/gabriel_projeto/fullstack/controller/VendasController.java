package br.ueg.trindade.gabriel_projeto.fullstack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.ueg.trindade.gabriel_projeto.fullstack.model.Vendas;
import br.ueg.trindade.gabriel_projeto.fullstack.repository.VendasRepository;

import java.util.List;

@RestController
@RequestMapping("/vendas")
@CrossOrigin(origins = "*")
public class VendasController {

    @Autowired
    private VendasRepository vendasRepository;

    @GetMapping
    public List<Vendas> listarVendas() {
        return vendasRepository.findAll();
    }

    @GetMapping("/{id}")
    public Vendas buscarVenda(@PathVariable Long id) {
        return vendasRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Vendas criarVenda(@RequestBody Vendas venda) {
        return vendasRepository.save(venda);
    }

    @PutMapping("/{id}")
    public Vendas atualizarVenda(
            @PathVariable Long id,
            @RequestBody Vendas venda) {

        venda.setId(id);
        return vendasRepository.save(venda);
    }

    @DeleteMapping("/{id}")
    public void excluirVenda(@PathVariable Long id) {
        vendasRepository.deleteById(id);
    }
}