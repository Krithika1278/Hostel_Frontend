import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { StaffSectionComponent } from './staff-section/staff-section.component';
import { FooterComponent } from './footer/footer.component';
import {SharedModule} from "../../shared/shared.module";
import {FeatherModule} from "angular-feather";
import { AboutComponent } from './about/about.component';
import { HostelTypeComponent } from './about/hostel-type/hostel-type.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    FeatureSectionComponent,
    NewsSectionComponent,
    StaffSectionComponent,
    FooterComponent,
    AboutComponent,
    HostelTypeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeatherModule,
    NgOptimizedImage
  ]
})
export class HomeModule { }
