import {Component, OnInit} from '@angular/core';
import {ListItem} from "../listItem";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newList: ListItem[];
  newValue: ListItem[];

  constructor(private itemService: ItemService) {
    this.newValue = itemService.getItems();
  }

  ngOnInit() {

    this.getItems();
  }

  getItems(): void {
    this.newList = this.itemService.getItems();

  }


}
