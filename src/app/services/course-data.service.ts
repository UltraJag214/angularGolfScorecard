import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  private GolfScoreCardAPI = '';

  constructor(private httpClient: HttpClient) { }

  public getRequest() {
    return this.httpClient.get(this.GolfScoreCardAPI);
  }

  getCourseById(courseId) {
    this.GolfScoreCardAPI = `https://golf-courses-api.herokuapp.com/courses/${courseId}`
  }
}
