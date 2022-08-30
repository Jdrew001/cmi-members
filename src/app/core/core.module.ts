import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from './services/resource.service';
import { AuthorizationService } from './services/authorization.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ResourceService,
    AuthorizationService
  ]
})
export class CoreModule { }
