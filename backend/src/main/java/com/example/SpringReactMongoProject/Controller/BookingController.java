package com.example.SpringReactMongoProject.Controller;

import com.example.SpringReactMongoProject.Entity.Booking;
import com.example.SpringReactMongoProject.Entity.User;
import com.example.SpringReactMongoProject.Service.BookingServices;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/booking")
public class BookingController {

    private final BookingServices bookingServices;

    public BookingController(BookingServices bookingServices) {
        this.bookingServices = bookingServices;
    }

    @GetMapping(value = "/getall")
    private Iterable<Booking> getBookings(){
        return bookingServices.listAll();
    }


    @GetMapping(value = "/{id}")
    private Booking getBookingsById(@PathVariable(name="id")String _id){
        return bookingServices.getById(_id);
    }

    @PostMapping(value = "/save")
    private Booking saveVendor(@RequestBody Booking booking){
        System.out.println(booking.toString());
        bookingServices.saveOrUpdate(booking);
        return booking;
    }
}
