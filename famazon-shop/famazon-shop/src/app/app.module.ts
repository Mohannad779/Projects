import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common'; // Import CommonModule for pipes like 'currency'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,  // Ensure NavbarComponent is declared here
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule  // Import CommonModule to enable pipes like 'currency'
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
