package com.worthyWork.auth.service;

import com.worthyWork.auth.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
