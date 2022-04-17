package com.crs.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;




@JsonInclude(Include.NON_NULL)
public class SignUpDto {

	private String status;
	private String message;
	private String firstName;
	private String lastName;
	private String email;
	private String username;
	private String password;
	
	public SignUpDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SignUpDto(String status, String message, String firstName, String lastName, String email, String username,
			String password) {
		super();
		this.status = status;
		this.message = message;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.username = username;
		this.password = password;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	
	// getters and setters
	
	

}
