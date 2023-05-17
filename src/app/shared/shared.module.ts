import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterLink} from "@angular/router";
import { NavLinkComponent } from './navbar/nav-link/nav-link.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavLinkComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule {
}
