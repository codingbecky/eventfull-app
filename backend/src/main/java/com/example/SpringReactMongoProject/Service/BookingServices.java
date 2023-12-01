package com.example.SpringReactMongoProject.Service;


import com.example.SpringReactMongoProject.Entity.Booking;
import com.example.SpringReactMongoProject.Entity.User;
import com.example.SpringReactMongoProject.Repo.BookingRepo;
import com.example.SpringReactMongoProject.Repo.UserRepo;
import org.springframework.stereotype.Service;

@Service
public class BookingServices {

    private final BookingRepo repo;

    public BookingServices(BookingRepo repo) {
        this.repo = repo;
    }

    public void saveOrUpdate(Booking booking) {
        repo.save(booking);
    }

    public Iterable<Booking> listAll() {
        return this.repo.findAll();
    }


    public Booking getById(String id) {
        return this.repo.findById(id).get();
    }

}
