package com.example.SpringReactMongoProject.Repo;

import com.example.SpringReactMongoProject.Entity.Vendor;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface VendorRepo extends MongoRepository<Vendor, String> {

    //Optional<Vendor> findByEmail(String email);

    //Boolean existsByEmail(String email);
}
