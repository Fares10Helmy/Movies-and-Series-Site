import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  
  id:any;
  tvDetails: any ;

  imgSrc:string="https://image.tmdb.org/t/p/w500";

  constructor(private activeRoute:ActivatedRoute , private movieServes: MoviesServiceService ) {

    this.id = activeRoute.snapshot.paramMap.get('id');

    movieServes.gettvDetails(this.id).subscribe((data)=>{

      this.tvDetails = data;

    })


}






  ngOnInit(): void {
  }

}
