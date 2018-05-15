import {Component, OnInit} from '@angular/core';
import {ItemService} from "../item.service";
import {ListItem} from "../listItem";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  newObj: ListItem;
  newValue: ListItem[];

  constructor(private itemService: ItemService) {
    this.newValue = itemService.getItems();
  }

  addNew(header1: string, content1: string): void {
    let id1 = this.newValue.length;
    id1++;
    this.newObj = {
      id: id1,
      header: header1,
      content: content1
    };
    console.log(this.newObj)
    this.itemService.addItem(this.newObj);
  }

  ngOnInit() {
  }

}
