import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { FormsModule } from '@angular/forms';
import { UpdateCarComponent } from './update-car/update-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [
    AppComponent,
    ListCarComponent,
    CreateCarComponent,
    UpdateCarComponent,
    CarDetailsComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
        
  ],


  imports: [
  
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule

  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
