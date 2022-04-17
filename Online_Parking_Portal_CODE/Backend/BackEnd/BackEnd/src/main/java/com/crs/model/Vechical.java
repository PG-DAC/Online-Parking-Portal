package com.crs.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vechical_info")
public class Vechical {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer VechicalId;
	
	@Column(name="vechical_type")
	private String vechicalType;
	
	@Column(name="company")
	private String company;
	
	@Column(name="model_no")
	private String modelNo;
	
	@Column(name="mob_No")
	private String mobNo;
	
	@Column(name="color")
	private String color;
	
	@Column(name="image")
	private String imagePath;
	
	@Column(name="created_Date")
	private Timestamp createdDate;
	
	@Column(name="deposit")
	private Double deposit;
	
	@Column(name="rent")
	private Double rent;
	
	@Column(name="running_status")
	private Double runningsStatus;
	
	@Column(name="vechical_status")//,nullable = false,length = 10
	private String status;

	public Vechical() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vechical(Integer vechicalId, String vechicalType, String company, String modelNo, String mobNo, String color,
			String imagePath, Timestamp createdDate, Double deposit, Double rent, Double runningsStatus,
			String status) {
		super();
		VechicalId = vechicalId;
		this.vechicalType = vechicalType;
		this.company = company;
		this.modelNo = modelNo;
		this.mobNo = mobNo;
		this.color = color;
		this.imagePath = imagePath;
		this.createdDate = createdDate;
		this.deposit = deposit;
		this.rent = rent;
		this.runningsStatus = runningsStatus;
		this.status = status;
	}

	public Integer getVechicalId() {
		return VechicalId;
	}

	public void setVechicalId(Integer vechicalId) {
		VechicalId = vechicalId;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
}
