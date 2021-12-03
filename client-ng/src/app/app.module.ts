import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockPageComponent } from './pages/clock-page/clock-page.component';
import { ClockComponent } from './components/clock/clock.component';

@NgModule({
  declarations: [AppComponent, ClockPageComponent, ClockComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
