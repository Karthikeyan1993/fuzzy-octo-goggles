import { Component, OnInit } from '@angular/core';
import { InstaFeed } from '../common/model';
import { InstaService } from '../insta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  instaFeeds: InstaFeed[] = [];
  prop = '';
  orderBy = 'asc';
  constructor(private instService: InstaService) {}

  ngOnInit(): void {
    this.init();
  }

  private init = () => {
    this.getInstaFeedsData();
  }

  private getInstaFeedsData = () => {
    this.instService.getInstaFeeds().subscribe((response) => {
      this.instaFeeds = response;
    });
  }

  doOrder = (prop: string): void => {
    this.prop = prop;
    this.orderBy = this.orderBy === 'asc' ? 'desc' : 'asc';
  }

  getClass = (prop: string) => {
    return {
      'fa-sort': prop !== this.prop,
      'fa-caret-up': prop === this.prop && this.orderBy === 'asc',
      'fa-caret-down': prop === this.prop && this.orderBy === 'desc',
    };
  }
}
