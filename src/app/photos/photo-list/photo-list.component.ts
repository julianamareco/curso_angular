import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];

  constructor(private photoService: PhotoService,
    private activatedRoute: ActivatedRoute) {

  }

  // const observable = http.get('http://localhost:3000/flavio/photos');
  // observable.subscribe();

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);

  }
}
