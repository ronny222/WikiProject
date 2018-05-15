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
    console.log(newItem)
    this.getItems().push(newItem);

  }
  getIt(): string[]
  {
    let i;
    for(i=0; i<myListItems.length; i++)
    {
      this.obj[i] = myListItems[i].header;
      console.log(this.obj[i]);
    }
    return this.obj;
  }




}
