import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  terndMovie:any;
  trendFilm:any;
  imgSrc:string="https://image.tmdb.org/t/p/w500";

  constructor(private movie : MoviesServiceService , private film : MoviesServiceService) {

    movie.getTrending().subscribe((data)=>{
      this.terndMovie = data.results.slice(0,10);



    })

    film.getTrendingfilm().subscribe((data)=>{
      this.trendFilm = data.results;
    })

  }

  ngOnInit(): void {
  }

}
