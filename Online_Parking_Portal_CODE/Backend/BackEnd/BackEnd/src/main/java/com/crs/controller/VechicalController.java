package com.crs.controller;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.crs.dto.VehicalDto;
import com.crs.model.Vechical;
import com.crs.repository.VechicalRepository;
import com.crs.service.VechicalService;

import net.bytebuddy.asm.Advice.Return;

@RestController
@CrossOrigin
public class VechicalController {

	@Autowired
	VechicalService vechicalService;
	@Autowired
	VechicalRepository vechicalRepository;
	@GetMapping("/getVechical")
	private @ResponseBody List<Vechical> getAllVechical() {
		List<Vechical> vlist = vechicalService.getAllVechical();
		return vlist;
	}

	@GetMapping("/getVechicalforBooking/{fromDate}/{toDate}")
	private @ResponseBody List<Vechical> getVechicalforBooking(@PathVariable String fromDate,@PathVariable String toDate) {
		System.out.println("FromDate" + fromDate);
		System.out.println("toDate" + toDate);

		List<Vechical> vlist = vechicalService.getVechicalforBooking(fromDate, toDate);
		return vlist;
	}

	@GetMapping("/employees/{id}")
	@ResponseBody
	public String getEmployeesById(@PathVariable String id) {
		return "ID: " + id;
	}

	@GetMapping("/hello/{name}")
	public String hello0(@PathVariable("name") String name) {
		return "Hello " + name;
	}

	// @GetMapping("/vechicalById/{vechicalId}/")
	@GetMapping("/vechicalById/{vechicalId}")
	private @ResponseBody VehicalDto getVechical(@PathVariable("vechicalId") int VechicalId) {
		Vechical vcl = vechicalService.getVechicalById(VechicalId);
		VehicalDto vclDto = new VehicalDto();
		if (vcl != null) {
			vclDto.setStatus("SUCCESS");
			vclDto.setMessage("VEHICAL_IS_PRESENT");
			vclDto.setVechicalType(vcl.getVechicalType());
			vclDto.setVechicalId(vcl.getVechicalId());
			vclDto.setCompany(vcl.getCompany());
			// vclDto.setCreatedDate(vcl.getCreatedDate());
			vclDto.setDeposit(vcl.getDeposit());
			vclDto.setImagePath(vcl.getImagePath());
			vclDto.setMobNo(vcl.getMobNo());
			vclDto.setModelNo(vcl.getModelNo());
			vclDto.setRent(vcl.getRent());
			vclDto.setRunningsStatus(vcl.getRunningsStatus());
			vclDto.setVechicalstatus(vcl.getStatus());
			vclDto.setColor(vcl.getColor());

			return vclDto;
		} else {
			vclDto.setStatus("ERROR");
			vclDto.setMessage("VEHICAL_IS_NOT_PRESENT");
			return vclDto;
		}

	}

	@PostMapping("/saveVechical")
	private @ResponseBody VehicalDto saveVechical(@RequestBody Vechical vechical) {
		List<Vechical> vlist = vechicalService.getAllVechical();
		VehicalDto vclDto = new VehicalDto();
		for (Vechical vcl : vlist) {
			if (vcl.equals(vechical)) {
				System.out.println("Vehical Already exists!");
				vclDto.setMessage("VEHICL_ALREADY_EXISTS");
				vclDto.setStatus("ERROR");
				return vclDto;
			}
		}
		Date date = new Date();
		Timestamp timestamp2 = new Timestamp(date.getTime());
		vechical.setCreatedDate(timestamp2);
		vechicalService.saveOrUpdate(vechical);
		vclDto.setStatus("SUCCESS");
		vclDto.setMessage("VEHICAL_ADDED_SUCCESSFULLY");
		vclDto.setVechicalType(vechical.getVechicalType());
		vclDto.setCompany(vechical.getCompany());
		// vclDto.setVechicalId(vechical.getVechicalId());
	    //vclDto.setCreatedDate(vechical.getCreatedDate());
		vclDto.setDeposit(vechical.getDeposit());
		vclDto.setImagePath(vechical.getImagePath());
		vclDto.setMobNo(vechical.getMobNo());
		vclDto.setModelNo(vechical.getModelNo());
		vclDto.setRent(vechical.getRent());
		vclDto.setRunningsStatus(vechical.getRunningsStatus());
		vclDto.setVechicalstatus(vechical.getStatus());

		return vclDto;
	}

	@DeleteMapping("/deleteVechical/{vechicalId}")
	private List<Vechical> deleteVechical(@PathVariable("vechicalId") String vechicalId) {
		vechicalService.delete(Integer.parseInt(vechicalId));
		List<Vechical> vlist = vechicalService.getAllVechical();
		return vlist;	
		
	}

	@PutMapping("/vechicalById/{vechicalId}")
	private Vechical updatePrkingData(@RequestBody Vechical vechical) {
		System.out.println(vechical);
		vechicalService.saveOrUpdate(vechical);
		return vechical;
	}
	

}