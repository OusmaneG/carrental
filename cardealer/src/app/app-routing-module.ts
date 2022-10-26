import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { Car } from './models/car';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UpdateCarComponent } from './update-car/update-car.component';

const routes: Routes = [
    
    { path: 'create-car', component: CreateCarComponent, canActivate: [AuthGaurdService]},
    { path: '', redirectTo: 'login', pathMatch: 'full' },    
    { path: 'cars', component: ListCarComponent, canActivate: [AuthGaurdService]}, 
    { path: 'update-car/:id', component: UpdateCarComponent },   
    { path: 'car-details/:id', component: CarDetailsComponent, canActivate: [AuthGaurdService]},
    { path: 'login', component: LoginComponent},
    { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
