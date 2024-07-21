package com.mycompany.adminclientes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mycompany.adminclientes.model.Cliente;
import com.mycompany.adminclientes.repository.ClienteRepository;
import com.mycompany.adminclientes.exception.ResourceNotFoundException;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

/**
 * Controlador REST para gestionar clientes.
 */
@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    /**
     * Obtiene todos los clientes.
     * @return Lista de clientes.
     */
    @GetMapping
    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    /**
     * Crea un nuevo cliente.
     * @param cliente Datos del cliente a crear.
     * @return Cliente creado.
     */
    @PostMapping
    public Cliente createCliente(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    /**
     * Obtiene un cliente por su ID.
     * @param id ID del cliente a obtener.
     * @return Cliente encontrado.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getClienteById(@PathVariable Long id) {
        Cliente cliente = clienteRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado: " + id));
        return ResponseEntity.ok(cliente);
    }

    /**
     * Actualiza un cliente existente.
     * @param id ID del cliente a actualizar.
     * @param detallesCliente Datos del cliente a actualizar.
     * @return Cliente actualizado.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable Long id, @RequestBody Cliente detallesCliente) {
        Cliente cliente = clienteRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado: " + id));

        cliente.setNombre(detallesCliente.getNombre());
        cliente.setEmail(detallesCliente.getEmail());
        cliente.setTelefono(detallesCliente.getTelefono());
        final Cliente updatedCliente = clienteRepository.save(cliente);
        return ResponseEntity.ok(updatedCliente);
    }

    /**
     * Elimina un cliente.
     * @param id ID del cliente a eliminar.
     * @return Confirmación de eliminación.
     */
    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteCliente(@PathVariable Long id) {
        Cliente cliente = clienteRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado: " + id));

        clienteRepository.delete(cliente);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
