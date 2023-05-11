import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {MovieService} from '../service/movie.service';
import {listMovie} from '../model/movie.model';

@Component({selector: 'app-child', templateUrl: './child.component.html', styleUrls: ['./child.component.scss']})
export class ChildComponent implements OnInit {
  @Input()textFromParent : string | undefined;
  @Output()notify : EventEmitter < string > = new EventEmitter<string>();
  buttonShow : boolean = false;


  // Home Work
  @Input()movieId : string | undefined;
  @Output() movieData: EventEmitter<listMovie> = new EventEmitter<listMovie>();
  public listmovie: listMovie | undefined;

  constructor(
    private MovieService : MovieService,
    ) {}

  ngOnInit() {
      console.log(this.textFromParent);
      if (!this.textFromParent) {
          this.buttonShow = true;
      }
  }

  onClick(): void {
      this.notify.emit("Hello From Child");
  }

  // Home Work
  getMovie() {
    if (this.movieId) {
      this.MovieService.getDatabyId(this.movieId).subscribe(res => {
        this.listmovie = res;
        this.movieData.emit(this.listmovie);
      });
    }
  }
  
}