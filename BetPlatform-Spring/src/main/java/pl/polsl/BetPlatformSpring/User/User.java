package pl.polsl.BetPlatformSpring.User;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class User {
    @Id
    @Column(name = "userId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Basic
    @Column(name = "username")
    private String username;

    @Basic
    @Column(name = "password")
    private String password;

    @Basic
    @Column(name = "email")
    private String email;

}
