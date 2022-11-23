import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { SitetabsComponent } from './sitetabs/sitetabs.component';

const routes: Routes = [
  {
    path:'section',
    component:SectionComponent
  },
  {
    path:'section2',
    component:Section2Component
  },
  {
    path:'section3',
    component:Section3Component
  },
  {
    path:'section4',
    component:Section4Component
  },
  {
    path:'section5',
    component:Section5Component
  },
  {
    path:'',
    redirectTo:'/section',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
