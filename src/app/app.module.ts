import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { LandingWelcomeComponent } from './components/landing-welcome/landing-welcome.component';
import { SectionHomepageComponent } from './components/section-homepage/section-homepage.component';
import { ThreeProductsComponent } from './components/three-products/three-products.component';
import { ProductSelectionHomepageComponent } from './components/product-selection-homepage/product-selection-homepage.component';
import { SectionHomepageLastComponent } from './components/section-homepage-last/section-homepage-last.component';
import { VisitedProductsComponent } from './components/visited-products/visited-products.component';
import { VisitedProductsCardsComponent } from './components/visited-products-cards/visited-products-cards.component';
import { CounterComponent } from './components/counter/counter.component';
import { DenonciatorComponent } from './components/denonciator/denonciator.component';
import { AppRootingModule } from './app-rooting.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CategoryComponent } from './pages/category/category.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartSectionComponent } from './components/cart-section/cart-section.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardsComponent,
    ProductCategoryComponent,
    LandingWelcomeComponent,
    SectionHomepageComponent,
    ThreeProductsComponent,
    ProductSelectionHomepageComponent,
    SectionHomepageLastComponent,
    VisitedProductsComponent,
    VisitedProductsCardsComponent,
    CounterComponent,
    DenonciatorComponent,
    HomepageComponent,
    CategoryComponent,
    ContactComponent,
    CartSectionComponent,
    CartComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRootingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }