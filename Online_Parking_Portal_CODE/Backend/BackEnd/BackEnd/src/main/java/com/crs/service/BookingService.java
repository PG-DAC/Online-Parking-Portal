package com.crs.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crs.model.Booking;
import com.crs.repository.BookingRepository;

//defining the business logic  
@Service
public class BookingService {

	@Autowired
	BookingRepository bookingsRepository;

//getting all Booking record by using the method findaAll() of CrudRepository  
	public List<Booking> getAllBookings() {
		List<Booking> bookings = new ArrayList<Booking>();
		bookingsRepository.findAll().forEach(booking1 -> bookings.add(booking1));
		return bookings;
	}

	
//getting a specific record by using the method findById() of CrudRepository  
	public Booking getBookingById(int id) {
		return bookingsRepository.findById(id).get();
	}

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Booking booking) {
		bookingsRepository.save(booking);
	}

//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(int id) {
		bookingsRepository.deleteById(id);
	}

//updating a record  
	public void update(Booking booking, int bookingId) {
		bookingsRepository.save(booking);
	}
}