package com.example.SpringReactMongoProject.Entity;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "vendors")
public class Vendor {
    @Id
    private String _id;

    @NotBlank
    @Size(max = 20)
    private String name;

    @NotBlank
    @Size(max = 120)
    private String password;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    public Vendor(String _id, String name, String email, String password) {
        this._id = _id;
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public Vendor(String name, String email, String password) {
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public Vendor() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getUsername() {
        return name;
    }

    public void setUsername(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Vendor{" +
                "_id='" + _id + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
