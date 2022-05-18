import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesServiceService } from '../movies-service.service';
@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  
  id:any;
  moviesDetails: any ;

  imgSrc:string="https://image.tmdb.org/t/p/w500";


  constructor(private activeRoute:ActivatedRoute , private movieServes: MoviesServiceService ) {


  this.id = activeRoute.snapshot.paramMap.get('id');

  movieServes.getMoviesDetails(this.id).subscribe((data)=>{

    this.moviesDetails = data;

  })


  }

  ngOnInit(): void {
  }

}
