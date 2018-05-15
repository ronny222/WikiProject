import {Component, OnInit} from '@angular/core';
import {ListItem} from "../listItem";
import {ItemService} from "../item.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  obj: string[] = new Array("");
  newList: ListItem[];
  newValue: ListItem[];

  constructor(private itemService: ItemService) {
    this.newValue = itemService.getItems();
    this.getItems();
    this.getItNow();
  }

  ngOnInit() {
    this.getItems();
    this.getItNow();

  }
  getItems(): void {
    this.newList = this.itemService.getItems();
  }

  getItNow() {
    this.obj = this.itemService.getIt();
  }
}


