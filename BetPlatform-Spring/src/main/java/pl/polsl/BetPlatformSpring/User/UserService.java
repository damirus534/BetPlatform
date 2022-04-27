package pl.polsl.BetPlatformSpring.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public String addUser(User user){
        //searching for Duplicates
        List<User> myUsers;
        myUsers = userRepository.findAll();
        for(User myUser : myUsers){
            if(myUser.getUsername().equals(user.getUsername())){
                return "Account with this username exists";
            }
            if(myUser.getEmail().equals(user.getEmail())){
                return "Account with this email already exists";
            }
        }
        //if duplicates doesn't exists then insert account into database
        userRepository.saveAndFlush(user);
        return "success";
    }


}
