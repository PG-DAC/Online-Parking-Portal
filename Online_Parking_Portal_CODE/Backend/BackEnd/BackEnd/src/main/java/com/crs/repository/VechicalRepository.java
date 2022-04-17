package com.crs.repository;  
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.crs.model.Vechical;  
//repository that extends CrudRepository  

public interface VechicalRepository extends CrudRepository<Vechical, Integer>  
{  
	
	@Query(value="select * from vechical_info as vi where vi.vechical_id not "
			+ "in(select bd.vechical_id from booking_dtls as bd where DATE(from_date) "
			+ "BETWEEN DATE(:fromDate) and DATE(:endDate) and  DATE(start_date)  "
			+ "BETWEEN DATE(:fromDate) and DATE(:endDate))",nativeQuery = true)
	List<Vechical> getVechicalforBooking(String fromDate,String endDate);
}