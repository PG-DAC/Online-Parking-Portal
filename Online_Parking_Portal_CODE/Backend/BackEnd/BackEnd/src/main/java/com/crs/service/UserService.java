package com.crs.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crs.model.UserDtls;
import com.crs.repository.UserRepository;

//defining the business logic  
@Service
public class UserService {
	
	@Autowired
	UserRepository userDtlssRepository;

//getting all UserDtls record by using the method findaAll() of CrudRepository  
	public List<UserDtls> getAllUserDtlss() {
		List<UserDtls> sserDtlss = new ArrayList<UserDtls>();
		userDtlssRepository.findAll().forEach(userDtls1 -> sserDtlss.add(userDtls1));  
		return sserDtlss;
	}

//getting a specific record by using the method findById() of CrudRepository  
	public UserDtls getUserDtlsById(int id) {
		return userDtlssRepository.findById(id).get();
	}

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(UserDtls userDtls) {
		userDtlssRepository.save(userDtls);
	}

//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(int id) {
		userDtlssRepository.deleteById(id);
	}

//updating a record  
	public void update(UserDtls userDtls, int UserDtlsId) {
		userDtlssRepository.save(userDtls);
	}
}