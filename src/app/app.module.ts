import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SiteComponent } from './site/site.component';
import { ReserveComponent } from './reserve/reserve.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SwiperComponent } from './home/swiper/swiper.component';
import { ServicesComponent } from './home/services/services.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { OfferComponent } from './home/offer/offer.component';
import { PackagesComponent } from './home/packages/packages.component';
import { HeadingComponent } from './about/heading/heading.component';
import { StartComponent } from './about/start/start.component';
import { ReviewsComponent } from './about/reviews/reviews.component';
import { SiteHeadingComponent } from './site/site-heading/site-heading.component';
import { SitePackagesComponent } from './site/site-packages/site-packages.component';
import { ReserveHeadingComponent } from './reserve/reserve-heading/reserve-heading.component';
import { BookingComponent } from './reserve/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SiteComponent,
    ReserveComponent,
    FooterComponent,
    NavComponent,
    SwiperComponent,
    ServicesComponent,
    HomeAboutComponent,
    OfferComponent,
    PackagesComponent,
    HeadingComponent,
    StartComponent,
    ReviewsComponent,
    SiteHeadingComponent,
    SitePackagesComponent,
    ReserveHeadingComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
