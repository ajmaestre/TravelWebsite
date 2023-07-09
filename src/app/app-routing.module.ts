import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SiteComponent } from './site/site.component';
import { ReserveComponent } from './reserve/reserve.component';


const routesOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64],
}

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
                  { path: 'home', component: HomeComponent},
                  { path: 'about', component: AboutComponent},
                  { path: 'site', component: SiteComponent},
                  { path: 'reserve', component: ReserveComponent}
                ];

@NgModule({
  imports: [RouterModule.forRoot(routes, routesOptions)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
