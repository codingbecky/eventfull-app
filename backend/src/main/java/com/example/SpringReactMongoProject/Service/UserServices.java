package com.example.SpringReactMongoProject.Service;

import com.example.SpringReactMongoProject.Entity.User;
import com.example.SpringReactMongoProject.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserServices {

    private final UserRepo repo;

    public UserServices(UserRepo repo) {
        this.repo = repo;
    }

    public void saveOrUpdate(User users) {
        repo.save(users);
    }

    public Iterable<User> listAll() {
        return this.repo.findAll();
    }

    public void deleteUser(String id) {
        repo.deleteById(id);
    }

    public User getUserById(String userId) {
        return repo.findById(userId).get();
    }

}
