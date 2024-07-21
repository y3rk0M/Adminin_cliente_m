/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Hp
**/
package com.mycompany.adminclientes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mycompany.adminclientes.model.Cliente;

/**
 * Repositorio para la entidad Cliente, permite realizar operaciones CRUD.
 */
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
