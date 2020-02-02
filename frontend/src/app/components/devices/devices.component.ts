import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { NgForm} from '@angular/forms';
import { Device } from 'src/app/models/device';


declare var M: any; // Materialize

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  providers: [DeviceService]
})
export class DevicesComponent implements OnInit {

  constructor( private deviceService : DeviceService) { 
    
  }

  ngOnInit() {
    this.getDevices();
  }

  resetForm(form?: NgForm){
    /*if (form){
      form.setValue({ type: "", description: "",value: null});
      this.deviceService.selectedDevice = new Device();
    }*/
    
    if(form) {
      form.reset();
      this.deviceService.selectedDevice = new Device();
      
    }
  }

  addDevice(form : NgForm){
    //console.log(form.value);
    // UPDATE DEVICE 
    if(form.value._id){
      this.deviceService.updateDeviceById(form.value)
        .subscribe(res=> {
          this.resetForm(form);
          this.getDevices();
          M.toast({html: 'Data updated succesfully'});        
        })
    } else {
      // ADD DEVICE 
      if((form.value.type||form.value.type) != null){
        this.deviceService.createDevice(form.value)
        .subscribe(res =>{
          this.resetForm(form);
          this.getDevices(); //Fake form to obtain but this is not a websocket
          M.toast({html: 'Data saved succesfully'});        
        })
      } else {
  
      }  
    }
    
  }

  editDevice(device : Device){
    //console.log(form.value);
    this.deviceService.selectedDevice = device;
  }

  getDevices(){
    //console.log(form.value);
    this.deviceService.getDevices()
      .subscribe(res =>{
        this.deviceService.devices = res as Device[];
        console.log(res);
      })
  }

  removeDevice(device : Device) {
    if (confirm('Are you sure you want to delete it?')){
      this.deviceService.removeDeviceById(device)
      .subscribe( res=> {
        this.getDevices(); //Fake form to obtain but this is not a websocket
        M.toast({html: 'Device ' + device._id + ' removed succesfully'});
        //console.log(res);
      })
    }
    
  }

  removeDevices(device : Device) {
    if (confirm('Are you sure you want to delete all?')){
      this.deviceService.removeDevices()
        .subscribe( res=> {
          this.getDevices(); //Fake form to obtain but this is not a websocket
          M.toast({html: 'Devices removed succesfully'});
        })
      }
  }
  

}
