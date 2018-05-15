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

    let i,counter =0;
    for( i=0; i<myListItems.length; i++)
    {
      if(newItem.header == myListItems[i].header)
      {
        counter++;
      }
    }
    if(counter == 0)
    {
      this.getItems().push(newItem);
    }
    else{

      alert("Error");
      counter = 0;
    }
  }
  getIt(): string[]
  {
    let i;
    for(i=0; i<myListItems.length; i++)
    {
      this.obj[i] = myListItems[i].header;
    }
    return this.obj;
  }
}


