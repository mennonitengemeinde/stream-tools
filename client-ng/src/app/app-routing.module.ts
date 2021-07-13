import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './pages/clock/clock.component';

const routes: Routes = [{ path: '', component: ClockComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
