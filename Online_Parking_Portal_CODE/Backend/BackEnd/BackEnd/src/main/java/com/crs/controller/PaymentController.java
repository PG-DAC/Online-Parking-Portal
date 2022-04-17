package com.crs.controller;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.crs.dto.PaymentDto;
import com.crs.model.Payment;
import com.crs.service.PaymentService;

@RestController
@CrossOrigin
public class PaymentController {

	@Autowired
	PaymentService paymentService;

	@PostMapping("/addPayment")
	public @ResponseBody PaymentDto addPayment(@Valid @RequestBody Payment newPayment) {

		PaymentDto pyDto = new PaymentDto();
		System.out.println("New Payment: " + newPayment.toString());

		Date date = new Date();
		Timestamp timestamp2 = new Timestamp(date.getTime());

		newPayment.setCreatedDate(timestamp2);
		paymentService.saveOrUpdate(newPayment);
		pyDto.setCardNo(newPayment.getCardNo());
		pyDto.setCvv(newPayment.getCvv());
		pyDto.setAmount(newPayment.getAmount());
		// pyDto.setBookingId(newPayment.getBookingId());
		pyDto.setMessage("PAYMENT_ADDED_SUCCESSFULLY");
		pyDto.setStatus("SUCCESS");
		return pyDto;
	}

	@GetMapping("/getAllPayment")
	private List<Payment> getAllPayment() {
		return paymentService.getAllPayment();
	}

	@GetMapping("/getPaymentById/{paymentId}")
	private @ResponseBody PaymentDto getPaymentById(@PathVariable("paymentId") int paymentId) {

		Payment bt = paymentService.getPaymentById(paymentId);
		PaymentDto ptdto = new PaymentDto();

		if (bt != null) {

			ptdto.setStatus("SUCCESS");
			ptdto.setMessage("PAYMENT_IS_PRESENT");
			ptdto.setCardNo(bt.getCardNo());
			ptdto.setCvv(bt.getCvv());
			ptdto.setAmount(bt.getAmount());
			return ptdto;
		} else {
			ptdto.setStatus("ERROR");
			ptdto.setMessage("PAYMENT_IS_NOT_PRESENT");
			return ptdto;
		}

	}

}
