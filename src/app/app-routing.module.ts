import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LampaComponent } from './lampa/lampa.component';
import { LedfalComponent } from './ledfal/ledfal.component';

const routes: Routes = [
  {
    path : "",
    component: LedfalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
