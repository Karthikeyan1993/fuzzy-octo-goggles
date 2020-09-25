import { Component, Input, OnInit } from '@angular/core';
import { InstaFeed } from '../common/model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
})
export class ImageCardComponent implements OnInit {
  @Input()
  feed: InstaFeed;

  hclass = '';
  constructor() {}

  ngOnInit(): void {}

  doLike = () => {
    ++this.feed.likes;
  }

  changeStyle = ($event: { type: string }): void => {
    this.hclass =
      $event.type === 'mouseover' ? 'animate__animated animate__heartBeat' : '';
  }
}
