package com.crs.model;

import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="booking_dtls")
public class Booking {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer bookingId;
	
	@Column(name="custId")
	private Integer custId;
	
	@Column(name="vechicalId")
	private String vechicalId;
	
	@Column(name="deposit")
	private Double deposit;
	
	@Column(name="rent")
	private Double rent;
	
	@Column(name="total_amount")
	private Double totalAmount;
	
	@Column(name="start_date")
	private Date startDate;
	
	@Column(name="from_date")
	private Date fromDate;
	
	@Column(name="created_Date")
	private Timestamp createdDate;
	
	@Column(name="status",nullable = false,length = 10)
	private String status;

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(Integer bookingId, Integer custId, String vechicalId, Double deposit, Double rent,
			Double totalAmount, Date startDate, Date fromDate, Timestamp createdDate, String status) {
		super();
		this.bookingId = bookingId;
		this.custId = custId;
		this.vechicalId = vechicalId;
		this.deposit = deposit;
		this.rent = rent;
		this.totalAmount = totalAmount;
		this.startDate = startDate;
		this.fromDate = fromDate;
		this.createdDate = createdDate;
		this.status = status;
	}

	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	public Integer getCustId() {
		return custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
}
