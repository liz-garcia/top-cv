package com.topcv.server.controller;

import com.topcv.server.model.User;
import com.topcv.server.repository.UserRepository;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** Controller for managing User-related API endpoints. Provides endpoints to fetch user data. */
@RestController
@RequestMapping("/api/users")
public class UserController {

  private static final Logger logger = Logger.getLogger(UserController.class.getName());

  @Autowired private UserRepository userRepository;

  /** Handles GET requests to fetch all users. */
  @GetMapping
  public ResponseEntity<?> getUsers() {
    try {
      List<User> users = userRepository.findAll();
      return ResponseEntity.ok().body(new Response(true, users));
    } catch (Exception e) {
      logger.log(Level.SEVERE, "Error fetching users", e);
      return ResponseEntity.status(500)
          .body(new Response(false, "Unable to get users, try again later"));
    }
  }

  /** Wrapper class for API responses. */
  static class Response {
    private boolean success; // Success status
    private Object result; // Used for data in success cases
    private String msg; // Used for error messages

    /** Constructor for success responses. */
    public Response(boolean success, Object result) {
      this.success = success;
      this.msg = null; // No message for success
      this.result = result;
    }

    /** Constructor for error responses. */
    public Response(boolean success, String msg) {
      this.success = success;
      this.msg = msg;
      this.result = null; // No result for errors
    }

    public boolean isSuccess() {
      return success;
    }

    public Object getResult() {
      return result;
    }

    public String getMsg() {
      return msg;
    }
  }
}
