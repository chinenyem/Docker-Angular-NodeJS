import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmProfileService {

  //link to api, pointing to localhost
  //need to change this
  //private API = 'http://localhost:4400';


  constructor(private http: Http) {
  }

  public getStations(){
    //if using Docker and containers, calling api to nodejs container instance
    // return this.http.get(`${this.API}/busstations`)
    //             .pipe(
    //               map((res:Response) => res.json())
    //           );

    return this.http.get('https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y')
                .pipe(
                  map((res:Response) => res.json())
              );

  }

  public getRouteTimes(station){
    //if using Docker and containers, calling api to nodejs container instance
    // return this.http.post(`${this.API}/getBustationslocations`, {station})
    //         .pipe(
    //           map((res:Response)=> res.json())
    //         );
    let url = "https://api.bart.gov/api/etd.aspx?cmd=etd&orig=" + station + "&key=MW9S-E7SL-26DU-VV8V&json=y"
    return this.http.get(url)
            .pipe(
              map((res:Response)=> res.json())
            );

  }

}
