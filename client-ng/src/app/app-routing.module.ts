import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockPageComponent } from './pages/clock-page/clock-page.component';

const routes: Routes = [{ path: '', component: ClockPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
