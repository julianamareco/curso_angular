import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg", 
      description: "Gato"
    },
    {
      url:"https://abrilexame.files.wordpress.com/2019/09/gettyimages-908714708.gif",
      description:"Gato Preto"
    }
  ];

}
