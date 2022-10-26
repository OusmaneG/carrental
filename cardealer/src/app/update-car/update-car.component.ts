import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car'
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  id: number;
  car: Car = new Car();

  constructor(private carService: CarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carService.getCarById(this.id).subscribe(data => {
      this.car = data;
    },
      error => console.log(error));
  }

  onSubmit() {
    this.carService.updateCar(this.id, this.car).subscribe(data => {
      this.goToCarList();
    },
      error => console.error(error));
  }

  goToCarList() {
    this.router.navigate(['/cars']);
  }
}
