package com.example.SpringReactMongoProject.Repo;

import com.example.SpringReactMongoProject.Entity.ImageFile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ImageFileRepo extends MongoRepository<ImageFile, String> {

}
