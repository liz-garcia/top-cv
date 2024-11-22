package com.topcv.server;

import io.github.cdimascio.dotenv.Dotenv;
import javax.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Objects;

@SpringBootApplication
public class ServerApplication {

  @PostConstruct
  public void init() {
    // Load the .env file
    Dotenv dotenv = Dotenv.configure().load();
    // Set the MONGODB_URI as a system property for Spring Boot to use
    System.setProperty("MONGODB_URI", Objects.requireNonNull(dotenv.get("MONGODB_URI")));
  }

  public static void main(String[] args) {
    SpringApplication.run(ServerApplication.class, args);
  }
}
