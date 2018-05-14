import {Injectable} from '@angular/core';
import {ListItem} from "./listItem";
import {myListItems} from "./listItems";
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';


@Injectable()
export class ItemService {

  constructor() {
  }

  getItems(): ListItem[] {
    return myListItems;
  }

  getItem(id: number): Observable<ListItem> {

    return of(myListItems.find(ListItem => ListItem.id === id));
  }

  addItem(newItem: ListItem) {
    this.getItems().push(newItem);

  }


}
