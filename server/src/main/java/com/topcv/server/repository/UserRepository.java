package com.topcv.server.repository;

import com.topcv.server.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    // No need for custom methods; use the built-in findAll() method
}
