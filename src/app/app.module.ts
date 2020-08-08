import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './Maincomponent/app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomepageLinksComponent } from './components/homepage-links/homepage-links.component';
import { MapComponent } from './components/map/map.component';
import { CuisinesMultiCardComponent } from './components/cuisines-multi-card/cuisines-multi-card.component';
import { TopAttractionMultiCardComponent } from './components/top-attraction-multi-card/top-attraction-multi-card.component';
import { CulturalDressesMultiCardComponent } from './components/cultural-dresses-multi-card/cultural-dresses-multi-card.component';
import { CulturalDressesPageComponent } from './pages/cultural-dresses-page/cultural-dresses-page.component';
import { TopAttractionsPageComponent } from './pages/top-attractions-page/top-attractions-page.component';
import { CuisinesPageComponent } from './pages/cuisines-page/cuisines-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RateUsComponent } from './components/rate-us/rate-us.component';
import { SingleCuisinePageComponent } from './pages/single-cuisine-page/single-cuisine-page.component';
import { SingleAttractionPageComponent } from './pages/single-attraction-page/single-attraction-page.component';
import { SingleDressesPageComponent } from './pages/single-dresses-page/single-dresses-page.component';
import { BookHotelsComponent } from './components/book-hotels/book-hotels.component';
import { HotelsPageComponent } from './pages/hotels-page/hotels-page.component';
import { GeographyComponent } from './pages/geography/geography.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FlightsComponent } from './components/flights/flights.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './SafePipe';
import { BookingFormComponent } from './pages/booking-form/booking-form.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { TokenInterceptor } from './services/token.interceptor';
import { MybookingsComponent } from './pages/mybookings/mybookings.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    WelcomeComponent,
    HomepageLinksComponent,
    MapComponent,
    CuisinesMultiCardComponent,
    TopAttractionMultiCardComponent,
    CulturalDressesMultiCardComponent,
    CulturalDressesPageComponent,
    TopAttractionsPageComponent,
    CuisinesPageComponent,
    NavbarComponent,
    RateUsComponent,
    SingleCuisinePageComponent,
    SingleAttractionPageComponent,
    SingleDressesPageComponent,
    BookHotelsComponent,
    HotelsPageComponent,
    GeographyComponent,
    AboutusPageComponent,
    ChatbotComponent,
    FlightsComponent,
    SafePipe,
    BookingFormComponent,
    SignupComponent,
    LoginComponent,
    MybookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
