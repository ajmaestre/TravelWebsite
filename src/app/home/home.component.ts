import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  placeSubscription!: Subscription;

  constructor(private homeService: HomeService) { 
    
  }

  ngOnInit(): void {
  }

  getTouristic(){
    this.placeSubscription = this.homeService.getTouristic().subscribe(
      {
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.placeSubscription?.unsubscribe();
  }

}
