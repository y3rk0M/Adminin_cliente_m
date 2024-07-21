/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.adminclientes.service;

/**
 *
 * @author Hp
 */

import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class TimeService {

    public String getCurrentTime() {
        return LocalDateTime.now().toString();
    }
}
