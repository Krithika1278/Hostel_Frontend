import {Component, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  imgClass: string = 'bg1';
  img = signal(1)


  ngOnInit(): void {
    setInterval(() => {
      this.img.set(this.img() === 3 ? 1 : this.img() + 1)
      this.imgClass = `bg${this.img()}`
    }, 3000)

  }
}
