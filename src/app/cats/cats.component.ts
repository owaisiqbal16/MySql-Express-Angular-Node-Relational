import { Component, OnInit } from '@angular/core';
import { CatService } from '../cats.service';
import { Cat } from '../../models/Cat';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats : Cat[];
  cat: Cat;

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.catService.getAllCats().subscribe(cats => {
      this.cats = cats;
    })
  }

  getCat(cat:Cat) {
    this.catService.getCat(cat.name).subscribe( cat => {
      this.cat = cat;
    })
  }

  insertCat(cat:Cat) {
    this.catService.insertCat(cat).subscribe( cat => {
      this.cats.push(cat);
    })
  }

  updateCat(cat:Cat) {
    this.catService.updateCat(cat).subscribe();
  }
}
