package com.example.SpringReactMongoProject.Repo;

import com.example.SpringReactMongoProject.Entity.Booking;
import com.example.SpringReactMongoProject.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookingRepo extends MongoRepository<Booking, String> {
}
