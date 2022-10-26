import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent {

  cars: Car[];
  car: Car [] = [];
  brand: any;
  p: number = 1;


  constructor(
    private carService: CarService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }



  public getAll() {
    this.carService.getCar().subscribe((response) => {
      this.cars = response;
      console.log(response);
    })
  }

  public updateCar(id: number) {
    this.router.navigate(['update-car', id]);
  }




  // openDialog() {
  //   const dialogRef = this.dialog.open(ConfirmationDialog,{
  //     data:{
  //       message: 'Are you sure want to delete?',
  //       buttonText: {
  //         ok: 'Save',
  //         cancel: 'No'
  //       }
  //     }
  //   });
  //   const snack = this.snackBar.open('Snack bar open before dialog');

  //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {
  //     if (confirmed) {
  //       snack.dismiss();
  //       const a = document.createElement('a');
  //       a.click();
  //       a.remove();
  //       snack.dismiss();
  //       this.snackBar.open('Closing snack bar in a few seconds', 'Fechar', {
  //         duration: 2000,
  //       });
  //     }
  //   });
  // }




  public deleteCar(id: number, index: number) {    
    
      this.carService.deleteCar(id).subscribe(data => {
      console.log(data) ;        
    })
  }

  carDetails(id: number) {
    this.router.navigate(['car-details', id]);
  }

  Search() {
    if (this.brand == '') {
      this.ngOnInit();
    } else {
      this.cars = this.cars.filter(response => {
        return response.brand.toLocaleLowerCase().match(this.brand.toLocaleLowerCase());
      });
    }
}
}


