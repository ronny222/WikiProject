import {Component, OnInit} from '@angular/core';
import {ListItem} from "./listItem";
import {ItemService} from "./item.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newValue: ListItem[];

  constructor(private itemService: ItemService) {
    this.newValue = itemService.getItems();
  }

  ngOnInit() {

    this.checkIt();
  }

  checkIt(): void {
    this.itemService.check();
  }
}

