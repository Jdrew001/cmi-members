import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  public getResourceURL(resource: string) {
    return environment.firebase.databaseURL;
  }
}
