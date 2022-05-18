import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { TvDetailsComponent  } from './tv-details/tv-details.component';



const routes: Routes =
[
  {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'movies', component:MoviesComponent},
    {path:'about', component:AboutComponent},
    {path:'tv', component:TvComponent},
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'people', component:PeopleComponent},
    {path:'movies-details/:type/:id', component:MoviesDetailsComponent},
    {path:'tv-details/:type/:id', component:TvDetailsComponent},
    {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
