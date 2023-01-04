import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    Card1Component,
    Card2Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Card1Component,
    Card2Component,
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentesModule { }
