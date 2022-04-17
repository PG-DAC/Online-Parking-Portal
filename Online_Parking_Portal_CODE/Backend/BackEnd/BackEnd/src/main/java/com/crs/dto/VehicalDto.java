package com.crs.dto;

import java.security.Timestamp;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class VehicalDto {
	
	private Integer VechicalId;
	private String status;
	private String message;
	private String vechicalType;
	private String company;
	private String modelNo;
	private String mobNo;
	private String color;
	private String imagePath;
	private Timestamp createdDate;
	private Double deposit;
	private Double rent;
	private Double runningsStatus;
	private String vechicalstatus;

	public VehicalDto() {
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

	public String getVechicalType() {
		return vechicalType;
	}

	public void setVechicalType(String vechicalType) {
		this.vechicalType = vechicalType;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getModelNo() {
		return modelNo;
	}

	public void setModelNo(String modelNo) {
		this.modelNo = modelNo;
	}

	public String getMobNo() {
		return mobNo;
	}

	public void setMobNo(String mobNo) {
		this.mobNo = mobNo;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public Timestamp getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
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

	public Double getRunningsStatus() {
		return runningsStatus;
	}

	public void setRunningsStatus(Double runningsStatus) {
		this.runningsStatus = runningsStatus;
	}

	public String getVechicalstatus() {
		return vechicalstatus;
	}

	public void setVechicalstatus(String vechicalstatus) {
		this.vechicalstatus = vechicalstatus;
	}

	public Integer getVechicalId() {
		return VechicalId;
	}

	public void setVechicalId(Integer vechicalId) {
		VechicalId = vechicalId;
	}

	
}
