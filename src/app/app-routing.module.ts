import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BidProductsComponent } from './components/bid-products/bid-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SavedProductsComponent } from './components/saved-products/saved-products.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BrowseComponent } from './components/browse/browse.component';
import { LoginAuthGuard } from './shared/guard/login-auth.guard';

const routes: Routes = [
  { path: "", component:ViewProductsComponent, canActivate:[LoginAuthGuard]},
  { path: "", component:HomeComponent},
  { path: "home", component:HomeComponent },
  { path: "browse", component:BrowseComponent, canActivate:[LoginAuthGuard] },
  { path: "header", component: HeaderComponent, canActivate:[LoginAuthGuard]  },
  { path: "sign-up", component:SignUpComponent },
  { path: "bid-products/:id", component:BidProductsComponent, canActivate:[LoginAuthGuard]},
  { path: "login", component:LoginComponent },
  { path: "profile", component:ProfileComponent, canActivate:[LoginAuthGuard] },
  { path: "saved-products", component:SavedProductsComponent, canActivate:[LoginAuthGuard] },
  { path: "saved-products/", component:SavedProductsComponent, canActivate:[LoginAuthGuard] },
  { path: "view-products", component:ViewProductsComponent, canActivate:[LoginAuthGuard] },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
