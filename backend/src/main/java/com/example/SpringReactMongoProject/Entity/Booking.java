package com.example.SpringReactMongoProject.Entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookings")
public class Booking {

    @Id
    private String _id;

    @NotBlank
    @Size(max = 20)
    private String vendorId;

    @NotBlank
    @Size(max = 20)
    private String userId;


    @NotBlank
    @Size(max = 20)
    private String email;


    @NotBlank
    @Size(max = 20)
    private String name;


    @NotBlank
    @Size(max = 20)
    private String date;


    public Booking(String vendorId, String userId, String email, String name, String date) {
        this.userId = userId;
        this.vendorId = vendorId;
        this.email = email;
        this.name = name;
        this.date = date;
    }

    public String getId() {
        return this._id;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public String getDate() {
        return this.date;
    }

    public Booking() {
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setVendorId(String vendorId) {
        this.vendorId = vendorId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }


    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "_id=" + _id +
                ", vendorId=" + vendorId +
                ", userId=" + userId +
                ", email=" + email +
                ", name=" + name +
                ", date=" + date +
                '}';
    }
}
