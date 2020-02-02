import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';
// pending to add componoent?? 
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  selectedDevice : Device;
  devices : Device[];

  readonly URL_API = 'http://localhost:3000/db/devices';
  constructor( private http: HttpClient) { 
    this.selectedDevice = new Device();
  }

  getDevices() {
    return this.http.get(this.URL_API);
  }

  getDeviceById(device: Device) {
    return this.http.get(this.URL_API + `/${device._id}`);
  }

  createDevice(device: Device) {
    return this.http.post(this.URL_API, device);
  }

  updateDeviceById(device: Device) {
    return this.http.put(this.URL_API+ `/${device._id}`, device);
  }

  removeDeviceById(device: Device) {
    return this.http.delete(this.URL_API+ `/${device._id}`);
  }

  removeDevices() {
    return this.http.delete(this.URL_API);
  }

}
