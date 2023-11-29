package com.example.SpringReactMongoProject.Repo;

import com.example.SpringReactMongoProject.Entity.VendorDetail;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface VendorDetailRepo extends MongoRepository<VendorDetail, String> {

    //Optional<VendorDetail> findByEmail(String email);

    //Boolean existsByEmail(String email);
}
