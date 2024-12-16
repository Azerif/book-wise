package com.tubesbookwise.controller;

import com.tubesbookwise.Models.User;
import com.tubesbookwise.Service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @Operation(summary = "Login user", description = "Authenticate user with email and password")
    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestParam String email,
            @RequestParam String password) {
        try {
            User user = authService.login(email, password);
            String token = authService.generateToken(user);

            // Create a response map
            Map<String, Object> response = new HashMap<>();
            response.put("id", user.getId());
            response.put("email", user.getEmail());
            response.put("name", user.getName());
            response.put("role", user.getRole().toString());
            response.put("token", token);

            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(Map.of("error", e.getMessage()));
        }
    }

    @Operation(summary = "Login admin", description = "Authenticate admin with email and password")
    @PostMapping("/login/admin")
    public ResponseEntity<?> loginAdmin(
            @RequestParam String email,
            @RequestParam String password) {
        try {
            User user = authService.loginAdmin(email, password);
            String token = authService.generateToken(user);

            // Create a response map
            Map<String, Object> response = new HashMap<>();
            response.put("id", user.getId());
            response.put("email", user.getEmail());
            response.put("name", user.getName());
            response.put("role", user.getRole().toString());
            response.put("token", token);

            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.status(403).body(Map.of("error", e.getMessage()));
        }
    }
}
