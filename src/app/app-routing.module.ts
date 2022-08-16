import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  // { path: '**', pathMatch: 'full', redirectTo: '/customers' }, // Wildcard that matches anything that doesn't match previous
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Only once in an application
  exports: [RouterModule],
})
export class AppRoutingModule {}
