import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Car } from 'src/app/models/car';
import { CarService } from '../services/car.service';
import { ListCarComponent } from '../components/list-car/list-car.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  auto: CarService;
  
  brand: any;
 
  car: Car[] = [];

  constructor(public loginService: AuthenticationService, auto: CarService) { }

  ngOnInit(): void { 
    this.auto.getCar().subscribe((response) => {
      this.car = response ;
    }); 
  }

}
