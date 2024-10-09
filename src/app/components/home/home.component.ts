import { Component } from '@angular/core';
import { Post} from '../post.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  post: Post[] = [];
  titleHeader: string = "";
  bodyHeader: string = "";
  tagsHeader: Array<string> = []
  ngOnInit(){ // caricamento del componente
    fetch('./assets/db.json')
    .then((res)=>res.json())
    .then((dati)=>{
      console.log(dati.posts);
      for ( let i = 1 ; i < dati.posts.length; i++){
        this.post.push(dati.posts[i]);
        let singlePost: Post = dati.posts[i];

      }
      console.log(this.post[0].title)
      this.titleHeader = this.post[0].title
      this.bodyHeader = this.post[0].body
      this.tagsHeader = this.post[0].tags
    })
    .catch((err)=>{console.log(err)})
  }
}

