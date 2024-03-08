import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "portfolio",
    component: PortfolioComponent,
  },
  {
    path: "projects",
    component: ProjectComponent,
  },
  {
    path: "clients",
    component: CustomersComponent,
  },
  {
    path: "awards",
    component: AwardsComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "products",
    component: ProductComponent,
  },
  {
    path: "products/:id",
    component: ProductDetailsComponent,
  },
  {
    path: "cutomers",
    component: CustomersComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
