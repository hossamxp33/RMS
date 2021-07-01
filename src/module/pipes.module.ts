import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderPipe } from 'src/pipes/render.pipe';

// all used pipes



@NgModule({
  declarations: [
    RenderPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RenderPipe,
  ]
})
export class PipesModule { }
