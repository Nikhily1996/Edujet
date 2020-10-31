import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AboutUsComponent} from '../app/Categories/about-us/about-us.component';
import{ContactUsComponent} from '../app/Categories/contact-us/contact-us.component';
import{ServicesComponent} from '../app/Categories/services/services.component';
import{StudyAbroadComponent} from '../app/Categories/study-abroad/study-abroad.component';
import{HomeComponent} from '../app/Categories/home/home.component';
const routes: Routes = [
  {
      path: '',
      redirectTo: '/Home',
      pathMatch: 'full'
  },
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'StudyAbroad', component: StudyAbroadComponent },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
