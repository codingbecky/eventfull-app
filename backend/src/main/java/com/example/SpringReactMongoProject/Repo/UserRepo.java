package com.example.SpringReactMongoProject.Repo;

import com.example.SpringReactMongoProject.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {

}
