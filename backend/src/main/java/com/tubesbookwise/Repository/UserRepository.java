package com.tubesbookwise.Repository;

import com.tubesbookwise.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    List<User> findAllByRole(User.Role role);

    boolean existsByEmail(String email);

    boolean existsByPhone(String phone);

    boolean existsByNim(String nim);

    Optional<Object> findByEmail(String email);
    // Add any custom query methods if needed
}