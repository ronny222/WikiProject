import {Component, Input, OnInit} from '@angular/core';
import {ListItem} from "../listItem";
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ItemService} from "../item.service";

@Component({
  selector: 'app-disply-area',
  templateUrl: './disply-area.component.html',
  styleUrls: ['./disply-area.component.css']
})
export class DisplyAreaComponent implements OnInit {

  @Input() myNewItem: ListItem;

  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private location: Location,
              private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEvent) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    this.getItem();
  }
  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.itemService.getItem(id)
      .subscribe(item => this.myNewItem = item).unsubscribe();

  }

}
