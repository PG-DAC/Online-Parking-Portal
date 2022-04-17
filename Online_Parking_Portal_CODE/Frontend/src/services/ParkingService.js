import axios from 'axios'
import React, { Component } from 'react'
const parking_update_url="http://localhost:8090/vechicalById"
const parking_update_ur="http://localhost:8090/saveVechical"
class ParkingService{
    SaveInfo(parkingInfo)
    {
        return axios.post(parking_update_ur,parkingInfo)
    }
    vechicalById(vechicalId){
    return axios.get(parking_update_url+ '/' +vechicalId)
  }

  updatePrkingData(parkingInfo,vechicalId)
  {
    console.log('ParkingInfo: '+JSON.stringify(parkingInfo));
    console.log(vechicalId);
    return axios.put(parking_update_url+ '/' +vechicalId,parkingInfo)

  }
}
export default new ParkingService()