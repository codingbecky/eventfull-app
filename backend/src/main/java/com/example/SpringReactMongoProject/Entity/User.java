package com.example.SpringReactMongoProject.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "users")
public class User {
    @Id
    private String _id;
    private String username;
    private String password;
    private String email;

    public User(String _id, String username, String password, String email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public User() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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
        return "User{" +
                "_id=" + _id +
                ", username=" + username +
                ", password=" + password +
                ", email=" + email +
                '}';
    }
}
