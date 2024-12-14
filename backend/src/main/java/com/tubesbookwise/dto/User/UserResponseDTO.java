package com.tubesbookwise.dto.User;

import com.tubesbookwise.model.User;

public class UserResponseDTO {
    private String id;
    private String email;
    private String name;
    private User.Role role;
    private String phone;
    private String nim;
    private String nip;
    private String year;

    // Default constructor
    public UserResponseDTO() {}

    // Parameterized constructor
    public UserResponseDTO(String id, String email, String name, User.Role role, String phone, String nim, String nip, String year) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
        this.phone = phone;
        this.nim = nim;
        this.nip = nip;
        this.year = year;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User.Role getRole() {
        return role;
    }

    public void setRole(User.Role role) {
        this.role = role;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getNim() {
        return nim;
    }

    public void setNim(String nim) {
        this.nim = nim;
    }

    public String getNip() {
        return nip;
    }

    public void setNip(String nip) {
        this.nip = nip;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
