package com.example.SpringReactMongoProject.Repo;

import com.example.SpringReactMongoProject.Entity.Property;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PropertyRepo extends MongoRepository<Property, String> {

}
