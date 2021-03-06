import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  redirectUri = 'http://localhost:4200/';
  isCollapsed = true;
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {}

  // loginWithRedirect() {
  //   this.auth.loginWithRedirect();
  // }

  // logout() {
  //   this.auth.logout({ returnTo: this.doc.location.origin });
  // }
}
