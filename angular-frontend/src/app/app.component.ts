import { Component, OnInit } from '@angular/core';
import { FilmProfileService } from './service/film-profile.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stations: Array<object> = [];
  public listofRoutes: Array<object> = [];
  public stationForm : FormGroup;
  public stationName:string = "";
  public currentTime:any;
  public startTime:any;
  public currentChosenSation:string;
  public currentLat:any;
  public currentLong:any;


  constructor(
    private filmProfileService:FilmProfileService,
    private fb: FormBuilder
  ){}

  ngOnInit(){
    this.getStations();
    this.getLocation();
    this.stationForm = this.fb.group({
      stationControl : ['']
    });
  }

  getStations(){
    this.filmProfileService.getStations().subscribe((data: any) => {
      this.stations = JSON.parse(JSON.stringify(data)).root.stations.station;
    });
  }

  getRouteTimes(stationValue:string){
    clearInterval(this.startTime);
    this.currentChosenSation = stationValue;
    let stationchoose = JSON.parse(JSON.stringify(this.stations)).filter(station => station.abbr == stationValue);
    this.stationName = stationchoose[0].name;
    let d = new Date();
      d.getHours();
      d.getMinutes();
      d.getSeconds();
    this.currentTime = this.getTime();
    this.filmProfileService.getRouteTimes(stationValue).subscribe((data: Array<object>) => {
      this.listofRoutes = JSON.parse(JSON.stringify(data)).root.station[0].etd;
    }, (err) =>{
      console.log(err)
    });
    this.getUpdatedSchedules();
  }

  getTime(){
    let dt = new Date(),
        h =  dt.getHours(), m = dt.getMinutes(),
        _time = (h > 12) ? (h-12 + ':' + m +' AM') : (h + ':' + m +' PM');
    return _time;
  }

  getUpdatedSchedules(){
    this.startTime = setInterval(()=>{
      this.getUpdatedSchedulesMethods();
    }, 60 * 1000);
  }

  getUpdatedSchedulesMethods(){
    this.currentTime = this.getTime();
    this.filmProfileService.getRouteTimes(this.currentChosenSation).subscribe((data: Array<object>) => {
      this.listofRoutes = JSON.parse(JSON.stringify(data)).root.station[0].etd;
    }, (err) =>{
      console.log(err)
    });
  }

  getLocation() {

    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition((position) => {
       this.showPosition(position);
     });
   } else {
     alert("Geolocation is not supported by this browser.");
   }
 }

  showPosition(position){
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;
  }









}
