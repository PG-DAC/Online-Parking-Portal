package com.crs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crs.model.UserDtls;
import com.crs.service.UserService;

@RestController
@CrossOrigin
public class UserOperationController {
	
	@Autowired
	UserService userService;

	
	
	@GetMapping("/getUser")
	private List<UserDtls> getAllUser() {
		return userService.getAllUserDtlss();
	}

	@GetMapping("/User/{UserId}")
	private UserDtls getUser(@PathVariable("userId") int userId) {
		return userService.getUserDtlsById(userId);
	}

	@DeleteMapping("/deleteUser/{userId}")
	private void deleteUser(@PathVariable("userId") String userId) {
		userService.delete(Integer.parseInt(userId));
	}

	@PostMapping("/saveUser")
	private int saveUser(@RequestBody UserDtls user) {
		userService.saveOrUpdate(user);
		return user.getUserId();
	}
	@PostMapping("/InActiveUser/{userId}")
	private List<UserDtls> updateUser(@PathVariable("userId") String userId) {
		UserDtls user = userService.getUserDtlsById(Integer.parseInt(userId));
		System.out.println("user.getStatus() "+user.getStatus());
		String status = user.getStatus().equals("In-Active")?"Active":"In-Active";
		System.out.println("status "+status);
		user.setStatus(status);
		userService.saveOrUpdate(user);
		return userService.getAllUserDtlss();
	}

	@PutMapping("/User")
	private UserDtls update(@RequestBody  UserDtls User) {
		userService.saveOrUpdate(User);
		return User;
	}
}