package com.topcv.server;

import io.github.cdimascio.dotenv.Dotenv;
import java.util.Objects;
import javax.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main entry point for the Spring Boot application. Initializes environment variables and starts
 * the Spring context.
 */
@SpringBootApplication
public class ServerApplication {

  /**
   * Initializes the application by loading environment variables from the .env file. This method is
   * executed after the Spring context is fully initialized. Sets the MONGODB_URI as a system
   * property for Spring Boot to use.
   */
  @PostConstruct
  public void init() {
    // Load the .env file
    Dotenv dotenv = Dotenv.configure().load();
    // Set the MONGODB_URI as a system property for Spring Boot to use
    System.setProperty("MONGODB_URI", Objects.requireNonNull(dotenv.get("MONGODB_URI")));
  }

  /** Main method to run the Spring Boot application. */
  public static void main(String[] args) {
    SpringApplication.run(ServerApplication.class, args);
  }
}
