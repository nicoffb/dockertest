import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TutorialResponse } from '../interfaces/tutorial';

const API_BASE_URL = 'http://localhost:6868/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialesService {

  constructor(private http: HttpClient) { }

  public getTutoriales(): Observable<TutorialResponse> {
    return this.http.get<TutorialResponse>(`${API_BASE_URL}`);
  }


}
