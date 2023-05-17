import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hostel-type',
  templateUrl: './hostel-type.component.html',
  styleUrls: ['./hostel-type.component.css']
})
export class HostelTypeComponent {
  @Input() name = ''
  @Input() description = '';


}
