import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { allAppRoutes } from './routes';

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
