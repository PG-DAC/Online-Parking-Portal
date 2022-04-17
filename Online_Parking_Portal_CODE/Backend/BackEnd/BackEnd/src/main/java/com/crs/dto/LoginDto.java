package com.crs.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;



@JsonInclude(Include.NON_NULL)
public class LoginDto {

	private String status;
	private String message;
	private String username;
	private String password;
	private String userrole;
	private Integer userId;
	
	
	public LoginDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LoginDto(String status, String message, String username, String password,Integer userId) {
		super();
		this.status = status;
		this.message = message;
		this.username = username;
		this.password = password;
		this.userId=userId;
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

	public String getUserrole() {
		return userrole;
	}

	public void setUserrole(String userrole) {
		this.userrole = userrole;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	
	
	

}