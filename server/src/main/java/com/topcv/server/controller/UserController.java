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

@RestController
@RequestMapping("/api/users")
public class UserController {

  private static final Logger logger = Logger.getLogger(UserController.class.getName());

  @Autowired private UserRepository userRepository;

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

  // Response wrapper class
  static class Response {
    private boolean success;
    private Object result; // Used for data in success cases
    private String msg; // Used for error messages

    // Constructor for success response
    public Response(boolean success, Object result) {
      this.success = success;
      this.result = result;
      this.msg = null; // No message for success
    }

    // Constructor for failure response
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
