import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPageComponent } from './lazy-page/lazy-page.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazyPageComponent]
})
export class LazyModule { }
