import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-staff-section',
  templateUrl: './staff-section.component.html',
  styleUrls: ['./staff-section.component.css']
})
export class StaffSectionComponent {
  @Input() src = '';
  @Input() name = '';
  @Input() role = '';

}
