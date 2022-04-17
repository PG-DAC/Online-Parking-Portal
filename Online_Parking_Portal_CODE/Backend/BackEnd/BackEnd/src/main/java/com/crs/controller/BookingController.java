package com.crs.controller;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.crs.dto.BookingDto;
import com.crs.model.Booking;
import com.crs.model.UserDtls;
import com.crs.model.Vechical;
import com.crs.service.BookingService;
import com.crs.service.UserService;
import com.crs.service.VechicalService;

@RestController
@CrossOrigin
public class BookingController {
	
	@Autowired
	BookingService bookingService;

	@Autowired
	VechicalService vechicalService;
	
	@Autowired
	UserService userService;
	
	@GetMapping("/getBooking")
	private List<Booking> getAllBooking() {
		return bookingService.getAllBookings();
	}
	
	@GetMapping("/getBookingById/{bookingId}")
	private @ResponseBody BookingDto getBookingById(@PathVariable("bookingId") int bookingId) {
		
		Booking bk=bookingService.getBookingById(bookingId);
		BookingDto dkdto=new BookingDto();
		
		if (bk != null) {
			Vechical vcl = vechicalService.getVechicalById(Integer.parseInt(bk.getVechicalId()));
			UserDtls usr=userService.getUserDtlsById(bk.getCustId());
			dkdto.setStatus("SUCCESS");
			dkdto.setMessage("BOOKING_IS_PRESENT");
			dkdto.setBookingId(bk.getBookingId());
			dkdto.setVehicalModel(vcl.getModelNo());
			dkdto.setUserName(usr.getFirstName()+" "+usr.getLastName());
			dkdto.setRent(bk.getRent());
			dkdto.setDeposit(bk.getDeposit());
			dkdto.setTotalAmount(bk.getTotalAmount());
			dkdto.setBookingstatus(bk.getStatus());
			dkdto.setCreatedDate(bk.getCreatedDate());
			dkdto.setStartDate(bk.getStartDate());
			dkdto.setFromDate(bk.getFromDate());
			return dkdto;
		} else {
			dkdto.setStatus("ERROR");
			dkdto.setMessage("BOOKING_IS_NOT_PRESENT");
			return dkdto;
		}
		
		
	}


	@PostMapping("/saveBooking")
	private  @ResponseBody BookingDto saveBooking(@RequestBody Booking booking) {
		List<Booking> bklist=bookingService.getAllBookings();
		Vechical vcl = vechicalService.getVechicalById(Integer.parseInt(booking.getVechicalId()));
		UserDtls usr=userService.getUserDtlsById(booking.getCustId());
		BookingDto dkdto=new BookingDto();
		for (Booking bkl : bklist) {
			if (bkl.equals(booking)) {
				System.out.println("Booking Already exists!");
				dkdto.setMessage("BOOKING_ALREADY_EXISTS");
				dkdto.setStatus("ERROR");
				return dkdto;
			}
		}
		Date date = new Date();
		Timestamp timestamp2 = new Timestamp(date.getTime());
		booking.setStatus("Pending");
		booking.setCreatedDate(timestamp2);
		bookingService.saveOrUpdate(booking);
		dkdto.setStatus("SUCCESS");
		dkdto.setMessage("BOOKING_ADDED_SUCCESSFULLY");
		dkdto.setUserName(usr.getFirstName()+" "+usr.getLastName());
		dkdto.setVehicalModel(vcl.getModelNo());
		dkdto.setBookingId(booking.getBookingId());
		dkdto.setRent(booking.getRent());
		dkdto.setDeposit(booking.getDeposit());
		dkdto.setBookingstatus(booking.getStatus());
		return dkdto;
	}
	
	@DeleteMapping("/deleteBooking/{bookingId}")
	private void deleteBooking(@PathVariable("bookingId") String bookingId) {
		bookingService.delete(Integer.parseInt(bookingId));
	}

	@PutMapping("/booking")
	private Booking update(@RequestBody  Booking booking) {
		bookingService.saveOrUpdate(booking);
		return booking;
	}
}