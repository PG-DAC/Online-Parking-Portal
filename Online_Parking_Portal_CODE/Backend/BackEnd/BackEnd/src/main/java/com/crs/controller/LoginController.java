package com.crs.controller;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.crs.dto.LoginDto;
import com.crs.dto.SignUpDto;
import com.crs.model.UserDtls;
import com.crs.service.UserService;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
@RestController
@CrossOrigin
public class LoginController {
	@Autowired
	UserService userService;
	@PostMapping("/register")
	public @ResponseBody SignUpDto createNewUser(@Valid @RequestBody UserDtls newuser) {

		List<UserDtls> users = userService.getAllUserDtlss();
		SignUpDto suDto = new SignUpDto();
		System.out.println("New user: " + newuser.toString());
		for (UserDtls usr : users){
			if (usr.getUserName().equals(newuser.getUserName())) 
			{
				System.out.println("User Already exists!");
				suDto.setMessage("USER_ALREADY_EXISTS");
				suDto.setStatus("ERROR");
				return suDto;
			}
		}
		Date date = new Date();
		Timestamp timestamp2 = new Timestamp(date.getTime());
		newuser.setUserRole(newuser.getUserRole());
		newuser.setCreatedDate(timestamp2);
		newuser.setStatus("Active");
		userService.saveOrUpdate(newuser);
		suDto.setFirstName(newuser.getFirstName());
		suDto.setLastName(newuser.getLastName());
		suDto.setEmail(newuser.getEmail());
		suDto.setPassword(newuser.getPassword());
		suDto.setUsername(newuser.getUserName());
		suDto.setMessage("USER_ADDED_SUCCESSFULLY");
		suDto.setStatus("SUCCESS");
		return suDto;
	}

	@PostMapping("/userLogin")
	@JsonInclude(Include.NON_NULL)
	public @ResponseBody LoginDto userLogin(@Valid @RequestBody UserDtls loginUser) {

		List<UserDtls> users = userService.getAllUserDtlss();
		LoginDto loDto = new LoginDto();
		System.out.println("loginUser: " + loginUser.toString());
		for (UserDtls usr : users) {
			if (usr.getUserName().equals(loginUser.getUserName())
					&& usr.getPassword().equals(loginUser.getPassword())) {
				System.out.println("Valid User!");
				loDto.setStatus("SUCCESS");
				loDto.setUsername(usr.getUserName());
				loDto.setPassword(usr.getPassword());
				loDto.setUserrole(usr.getUserRole());
				loDto.setUserId(usr.getUserId());
				loDto.setMessage("LOGIN_SUCCESSFULLY");
				return loDto;
			}
		}

		loDto.setStatus("ERROR");
		loDto.setMessage("INVALID_USER_NAME_OR_PASSWORD");
		return loDto;
	}

	@GetMapping("/getAllUser")
	public @ResponseBody List<UserDtls> getAllUser() {

		List<UserDtls> users = userService.getAllUserDtlss();
		return users;
	}

}
