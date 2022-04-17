package com.crs.repository;

import org.springframework.data.repository.CrudRepository;

import com.crs.model.Payment;
//repository that extends CrudRepository 
public interface PaymentRepository extends CrudRepository<Payment, Integer>{

}
