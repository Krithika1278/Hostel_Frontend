import {Component, HostListener, signal} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggle = signal(false)
  sticky = signal(false)

  toggleMenu() {
    this.toggle.update((val) => !val)
    console.log(this.toggle())
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    const scrollTop = window.scrollY;
    if (scrollTop > 500) {
      this.sticky.set(true)
    } else {
      this.sticky.set(false)
    }
  }

}
