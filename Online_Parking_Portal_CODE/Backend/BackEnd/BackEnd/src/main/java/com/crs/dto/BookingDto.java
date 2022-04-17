package com.crs.dto;

import java.sql.Date;
import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class BookingDto {

	
	private String status;
	private String message;
	private Integer bookingId;	
	private Integer userId;
	private String vechicalId;
	private Double deposit;
	private Double rent;
	private Double totalAmount;
	private Date startDate;
	private Date fromDate;
	private Timestamp createdDate;
	private String Bookingstatus;
	//private String vehicalName;
	private String VehicalModel;
	private String UserName;
	
	public BookingDto() {
		super();
		// TODO Auto-generated constructor stub
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

	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getVechicalId() {
		return vechicalId;
	}

	public void setVechicalId(String vechicalId) {
		this.vechicalId = vechicalId;
	}

	public Double getDeposit() {
		return deposit;
	}

	public void setDeposit(Double deposit) {
		this.deposit = deposit;
	}

	public Double getRent() {
		return rent;
	}

	public void setRent(Double rent) {
		this.rent = rent;
	}

	public Double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getFromDate() {
		return fromDate;
	}

	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}

	public Timestamp getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}

	public String getBookingstatus() {
		return Bookingstatus;
	}

	public void setBookingstatus(String bookingstatus) {
		Bookingstatus = bookingstatus;
	}

	public String getVehicalModel() {
		return VehicalModel;
	}

	public void setVehicalModel(String vehicalModel) {
		VehicalModel = vehicalModel;
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}
	
	
	
	
}
