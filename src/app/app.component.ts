import { Component,OnInit } from '@angular/core';
import { MoviesService } from './Services/movies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private moviesService:MoviesService
  )
  {}
  ngOnInit(): void {
    // this.getMovies()
  }

  getMovies(){
    this.moviesService.getAllProducts().subscribe((data:any)=>{
      console.log(data)
    })
  }
  title = 'movies-playlist';
  
}
