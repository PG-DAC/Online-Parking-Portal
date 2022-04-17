package com.crs.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "user_dtls")
public class UserDtls {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;

	@Column(name = "first_Name", nullable = false, length = 33)
	private String firstName;

	@Column(name = "last_Name", nullable = false, length = 33)
	private String lastName;

	@Column(name = "email", nullable = false, length = 256)
	private String email;

	@Column(name = "mob_No", nullable = false, length = 13)
	private String mobNo;

	@Column(name = "vehical_No")
	private String vehicalNo;

	@Column(name = "adhar_No")
	private String adharNo;

	@Column(name = "created_Date")
	private Timestamp createdDate;

	@Column(name = "status", nullable = false, length = 10)
	private String status;

	@Column(name = "user_name", nullable = false)
	private String userName;

	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "user_role")
	private String userRole;

	public UserDtls() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserDtls(Integer userId, String firstName, String lastName, String email, String mobNo, String vehicalNo,
			String adharNo, Timestamp createdDate, String status, String userName, String password, String userRole) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobNo = mobNo;
		this.vehicalNo = vehicalNo;
		this.adharNo = adharNo;
		this.createdDate = createdDate;
		this.status = status;
		this.userName = userName;
		this.password = password;
		this.userRole = userRole;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
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

	public String getMobNo() {
		return mobNo;
	}

	public void setMobNo(String mobNo) {
		this.mobNo = mobNo;
	}


	public String getVehicalNo() {
		return vehicalNo;
	}

	public void setVehicalNo(String vehicalNo) {
		this.vehicalNo = vehicalNo;
	}

	public String getAdharNo() {
		return adharNo;
	}

	public void setAdharNo(String adharNo) {
		this.adharNo = adharNo;
	}

	public Timestamp getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getUserName()
	{
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	
	

}
