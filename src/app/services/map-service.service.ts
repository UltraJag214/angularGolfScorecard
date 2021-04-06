import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  private GolfScoreCardAPI = 'https://golf-courses-api.herokuapp.com/courses';

  constructor(private httpClient: HttpClient) { }

  public getCourseData() {
    return this.httpClient.get(this.GolfScoreCardAPI);
  }
}
