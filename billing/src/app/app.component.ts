import { Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    isShell: boolean;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.isShell = true;
    }
  }

  @HostListener('window:childRouteChanged', ['$event'])
  onChildRouteChanged(event: any) {
    this.router.navigate([event.detail.route], event.detail.extras);
  }
}
