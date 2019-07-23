import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';


@Component({
 selector: 'app-list',
 templateUrl: 'list.page.html',
 styleUrls: ['list.page.scss']
})

export class ListPage {
 heroes: Observable<any>;

 constructor(public httpClient: HttpClient) {
   this.heroes = this.httpClient.get('http://swapi.co/api/people/1/');
   this.heroes
   .subscribe(data => {
     console.log('my data: ', data);
   })
 }
}
// export class ListPage implements OnInit {
//   private selectedItem: any;
//   private icons = [
//     'flask',
//     'wifi',
//     'beer',
//     'football',
//     'basketball',
//     'paper-plane',
//     'american-football',
//     'boat',
//     'bluetooth',
//     'build'
//   ];
//   public items: Array<{ title: string; note: string; icon: string }> = [];
//   constructor() {
//     for (let i = 1; i < 11; i++) {
//       this.items.push({
//         title: 'Item ' + i,
//         note: 'This is item #' + i,
//         icon: this.icons[Math.floor(Math.random() * this.icons.length)]
//       });
//     }
//   }



//   ngOnInit() {
//   }
//   // add back when alpha.4 is out
//   // navigate(item) {
//   //   this.router.navigate(['/list', JSON.stringify(item)]);
//   // }
// }
