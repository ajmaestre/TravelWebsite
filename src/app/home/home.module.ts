import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { SwiperComponent } from './swiper/swiper.component';
import { ServicesComponent } from './services/services.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { PackagesComponent } from './packages/packages.component';
import { OfferComponent } from './offer/offer.component';



@NgModule({
  declarations: [HomeComponent, SwiperComponent, ServicesComponent, HomeAboutComponent, PackagesComponent, OfferComponent],
  imports: [
    CommonModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
