package com.topcv.server.repository;

import com.topcv.server.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Repository interface for performing CRUD operations on User entities. Extends Spring Data's
 * MongoRepository to leverage built-in functionality.
 */
public interface UserRepository extends MongoRepository<User, String> {
  // No need for custom methods; use the built-in findAll() method
}
