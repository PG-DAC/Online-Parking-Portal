package com.crs.repository;  
import org.springframework.data.repository.CrudRepository;

import com.crs.model.UserDtls;  
//repository that extends CrudRepository  
public interface UserRepository extends CrudRepository<UserDtls, Integer>  
{  
	
}