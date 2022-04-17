package com.crs.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer paymentId;
	
	@Column(name = "card_no", nullable = false, length = 33)
	private String cardNo;

	@Column(name = "cvv", nullable = false, length = 33)
	private String cvv;

	@Column(name = "amount", nullable = false, length = 256)
	private double amount;
	
	@Column(name="bookingId")
	private Integer bookingId;
	
	@Column(name="created_Date")
	private Timestamp createdDate;

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(Integer paymentId, String cardNo, String cvv, double amount, Integer bookingId,
			Timestamp createdDate) {
		super();
		this.paymentId = paymentId;
		this.cardNo = cardNo;
		this.cvv = cvv;
		this.amount = amount;
		this.bookingId = bookingId;
		this.createdDate = createdDate;
	}

	public Integer getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(Integer paymentId) {
		this.paymentId = paymentId;
	}

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	public Timestamp getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}
	
	
	

}
