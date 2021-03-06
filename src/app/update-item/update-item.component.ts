import {Component, OnInit} from '@angular/core';
import {ListItem} from "../listItem";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  newList: ListItem[];
  newValue: ListItem[];
  constructor(private itemService: ItemService) {
    this.newValue = itemService.getItems();
  }
  ngOnInit() {

    this.getItems();
    this.checkIt()
  }

  getItems(): void {
    this.newList = this.itemService.getItems();
  }

  checkIt(): void {
    this.itemService.check();
  }


}
