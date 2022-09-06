import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../domain/address';

@Injectable({
  providedIn: 'root'
})
export class AddressCrudService {

  private baseURl : string = "http://localhost:8080/addressapi/address";
  constructor(private httpClient : HttpClient) { }

  getAllAddresses() : Observable<Address[]> {
    console.log("in getAllAddresses");
    
    return this.httpClient.get<Address[]>(this.baseURl+"/all");
  }

  addNewAddress(address : Address) : Observable<boolean>{
    console.log("in addNewAddress");
    console.log(address);
    return this.httpClient.post<boolean>(this.baseURl , address); //address object is passed 
       
  }

  deleteAddressByAddressId(addressId : number) : Observable<boolean>{
    console.log("in deleteAddressByAddressId");
    console.log(addressId);
    return this.httpClient.delete<boolean>(this.baseURl + "/" + addressId);
  }
  getSingleAddress(addressId:number):Observable<Address>{
    return this.httpClient.get<Address>(this.baseURl+"/"+addressId);
  }
  updateAddress(address:Address):Observable<boolean>{
    return this.httpClient.put<boolean>(this.baseURl,address);
  }

}
