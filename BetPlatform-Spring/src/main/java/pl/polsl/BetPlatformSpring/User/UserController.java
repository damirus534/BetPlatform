package pl.polsl.BetPlatformSpring.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path ="/register")
@CrossOrigin(origins = "http://localhost:4200") // necessary for request from frontend to work
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping
    public int addUser(@RequestBody User user){
        return userService.addUser(user);
    }


}
