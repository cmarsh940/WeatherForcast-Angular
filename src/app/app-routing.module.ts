import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';

const routes: Routes = [
  { path: '', component: LandingComponent , pathMatch: 'full' },
  { path: 'seattle', component: SeattleComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'dc', component: DcComponent },
  { path: 'chicago', component: ChicagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

