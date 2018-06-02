import {Injectable} from '@angular/core';
import {ListItem} from "./listItem";
import {myListItems} from "./listItems";
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';


@Injectable()
export class ItemService {

  obj: string[] = new Array("");

  constructor() {
  }

  getItems(): ListItem[] {

    return myListItems;
  }

  getItem(id: string): Observable<ListItem> {

    return of(myListItems.find(ListItem => ListItem.header === id));
  }

  addItem(newItem: ListItem) {

    let i, counter = 0;
    if (newItem.header == "") {
      alert("Error value is empty");

    }
    else {
      for (i = 0; i < myListItems.length; i++) {
        if (newItem.header == myListItems[i].header) {
          counter++;
        }
      }
      if (counter == 0) {
        this.getItems().push(newItem);
      }
      else {

        alert("Error value already exist");
        counter = 0;
      }
    }
  }

  getIt(): string[] {
    let i;
    for (i = 0; i < myListItems.length; i++) {
      this.obj[i] = myListItems[i].header;
    }
    return this.obj;
  }

  check() {
    let i, j, count = 0;
    for (i = 0; i < myListItems.length; i++) {
      for (j = 1; j <= myListItems.length; j++) {
        if (myListItems[i].header == myListItems[j + count].header) {
          alert("error - there are 2 or more HEADERS with the same value");
        }
      }
      count++;
    }
  }
}


