package com.crs.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crs.model.Payment;
import com.crs.repository.PaymentRepository;
//defining the business logic
@Service
public class PaymentService {
	@Autowired
	PaymentRepository paymentRepository;
	
	//getting all Payment record by using the method findaAll() of CrudRepository  
		public List<Payment> getAllPayment() {
			List<Payment> payments = new ArrayList<Payment>();
			paymentRepository.findAll().forEach(payments1 -> payments.add(payments1));
			return payments;
		}

		
	//getting a specific record by using the method findById() of CrudRepository  
		public Payment getPaymentById(int id) {
			return paymentRepository.findById(id).get();
		}

	//saving a specific record by using the method save() of CrudRepository  
		public void saveOrUpdate(Payment payment) {
			paymentRepository.save(payment);
		}

	//deleting a specific record by using the method deleteById() of CrudRepository  
		public void delete(int id) {
			paymentRepository.deleteById(id);
		}

	//updating a record  
		public void update(Payment payment, int paymentId) {
			paymentRepository.save(payment);
		}
	
}
