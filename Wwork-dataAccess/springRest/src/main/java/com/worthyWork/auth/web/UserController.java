package com.worthyWork.auth.web;

import com.worthyWork.auth.model.User;
import com.worthyWork.auth.repository.UserRepository;
import com.worthyWork.auth.service.SecurityService;
import com.worthyWork.auth.service.UserService;
import com.worthyWork.auth.validator.UserValidator;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private SecurityService securityService;

    @Autowired
    private UserValidator userValidator;

    @RequestMapping(value = "/registration", method = RequestMethod.GET)
    public String registration(Model model) {
        model.addAttribute("userForm", new User());

        return "registration";
    }

    @RequestMapping(value = "/registration", consumes="application/json",produces="application/json", method = RequestMethod.POST)
    public String registration(@RequestBody User user) {
    	String message ="";
    	if((userService.findByUsername(user.getUsername()))==null) {
    		userService.save(user);
    		message="User saved!!";
    	}
    	else {
    		message="User already exists !!";
    	}
        return message;
        
    }

    @GetMapping("/login")
    public String login(Model model, String error, String logout) {
        if (error != null)
            model.addAttribute("error", "Your username and password is invalid.");

        if (logout != null)
            model.addAttribute("message", "You have been logged out successfully.");

        return "login";
    }

    @GetMapping({"/", "/welcome"})
    public String welcome(Model model) {
        return "welcome";
    }
}
