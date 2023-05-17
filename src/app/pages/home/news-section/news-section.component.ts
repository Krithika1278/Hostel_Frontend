import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent {
  @Input() src = ''
  @Input() title = ''
  @Input() short_description = ''
}
