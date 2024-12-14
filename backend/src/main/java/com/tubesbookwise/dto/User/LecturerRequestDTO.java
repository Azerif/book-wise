package com.tubesbookwise.dto.User;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;

public class LecturerRequestDTO extends UserRequestDTO {
    @NotBlank(message = "NIP is required for lecturers")
    @Schema(description = "NIP dosen", example = "1301223164")
    private String nip;

    // Getters and setters
    public String getNip() {
        return nip;
    }

    public void setNip(String nip) {
        this.nip = nip;
    }
}
