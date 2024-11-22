package com.topcv.server;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry
        .addMapping("/**") // Apply to all endpoints
        .allowedOrigins("*") // Allow requests from any origin
        .allowedMethods("*") // Allow all HTTP methods (GET, POST, etc.)
        .allowedHeaders("*") // Allow all headers
        .allowCredentials(false); // Do not allow credentials for now
  }
}
