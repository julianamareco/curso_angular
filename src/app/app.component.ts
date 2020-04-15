import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  photos: any[] = [];

  constructor(private phoyoService: PhotoService) {}

  // const observable = http.get('http://localhost:3000/flavio/photos');
  // observable.subscribe();

  ngOnInit(): void {
    this.phoyoService
      .listFromUser('flavio')
      .subscribe(photos => {
        console.log(photos[0].userId);
        this.photos = photos
      });

  }

}
