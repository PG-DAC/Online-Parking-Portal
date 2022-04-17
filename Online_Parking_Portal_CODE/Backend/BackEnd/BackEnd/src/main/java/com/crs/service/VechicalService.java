package com.crs.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crs.model.Vechical;
import com.crs.repository.VechicalRepository;

//defining the business logic  
@Service
public class VechicalService {

	@Autowired
	VechicalRepository vechicalService;

//getting all Vechical record by using the method findaAll() of CrudRepository  
	public List<Vechical> getAllVechical() {
		List<Vechical> vechicals = new ArrayList<Vechical>();
		vechicalService.findAll().forEach(vechical1 -> vechicals.add(vechical1));
		return vechicals;
	}

	public List<Vechical> getVechicalforBooking(String fromDate,String endDate) {
		
		System.out.println("select * from vechical_info as vi where vi.vechical_id not "
			+ "in(select bd.vechical_id from booking_dtls as bd where DATE(from_date) "
			+ "BETWEEN DATE("+fromDate+") and DATE("+endDate+") and  DATE(start_date)  "
			+ "BETWEEN DATE("+fromDate+") and DATE("+endDate+")");
		return vechicalService.getVechicalforBooking(fromDate,endDate);
	}

//getting a specific record by using the method findById() of CrudRepository  
	public Vechical getVechicalById(int id) {
		return vechicalService.findById(id).get();
	}

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(Vechical vechical) {
		System.out.println(vechical);
		vechicalService.save(vechical);
	}

//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(int id) {
		vechicalService.deleteById(id);
	}

//updating a record  
	public void updatePrkingData(int vechicalId,Vechical vechical) {
		System.out.println(vechical);
		vechicalService.save(vechical);
	}
}