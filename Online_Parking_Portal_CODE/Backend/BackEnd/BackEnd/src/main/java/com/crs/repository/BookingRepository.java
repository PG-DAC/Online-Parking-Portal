package com.crs.repository;

import org.springframework.data.repository.CrudRepository;
import com.crs.model.Booking;

//repository that extends CrudRepository  
public interface BookingRepository extends CrudRepository<Booking, Integer> {

	

}