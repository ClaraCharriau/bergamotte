import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { LandingWelcomeComponent } from './components/landing-welcome/landing-welcome.component';
import { SectionHomepageComponent } from './components/section-homepage/section-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardsComponent,
    ProductCategoryComponent,
    LandingWelcomeComponent,
    SectionHomepageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }