import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CulturalDressesPageComponent } from './pages/cultural-dresses-page/cultural-dresses-page.component'
import { CuisinesPageComponent } from './pages/cuisines-page/cuisines-page.component'
import { TopAttractionsPageComponent } from './pages/top-attractions-page/top-attractions-page.component'
import { SingleCuisinePageComponent } from './pages/single-cuisine-page/single-cuisine-page.component';
import { SingleAttractionPageComponent } from './pages/single-attraction-page/single-attraction-page.component';
import { SingleDressesPageComponent } from './pages/single-dresses-page/single-dresses-page.component';
import { HotelsPageComponent } from './pages/hotels-page/hotels-page.component';
import { GeographyComponent } from './pages/geography/geography.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { BookingFormComponent } from './pages/booking-form/booking-form.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MybookingsComponent } from './pages/mybookings/mybookings.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
},
{
  path: 'cultural-dresses',
  component: CulturalDressesPageComponent
},
{
  path: 'attractions',
  component: TopAttractionsPageComponent
},
{
  path: 'cuisines',
  component: CuisinesPageComponent
},
{
  path: 'cuisines/:id',
  component: SingleCuisinePageComponent
},
{
  path: 'attractions/:id',
  component: SingleAttractionPageComponent
},
{
  path: 'cultural-dresses/:id',
  component: SingleDressesPageComponent
},
{
  path: 'hotel-listings',
  component: HotelsPageComponent
},
{
  path: 'geography',
  component: GeographyComponent
},
{
  path: 'aboutus',
  component: AboutusPageComponent
},
{
  path: 'chat',
  component: ChatbotComponent
},
{
  path: 'book/:id',
  component: BookingFormComponent
},
{
  path: 'sign-up',
  component: SignupComponent
},
{
  path: 'log-in',
  component: LoginComponent
},
{
  path: 'my-bookings',
  component: MybookingsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
