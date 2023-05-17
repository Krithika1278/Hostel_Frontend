import {NgModule} from '@angular/core';
import {FeatherModule} from "angular-feather";
import {Camera, Github, Heart, Hexagon, Home, Wind, User, PhoneCall, ArrowRight} from "angular-feather/icons";

const icons = {
  Hexagon,
  Home,
  Wind,
  User,
  PhoneCall,
  ArrowRight
}

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ], exports: [
    FeatherModule
  ]
})
export class IconsModule {
}
