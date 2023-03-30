import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}
  checkIfUserLoggedIn: boolean = false;
  checkIfUserIsSeller: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem('accessToken') != null) {
      if (this.authService.getRole() == 'ROLE_SELLER') {
        this.checkIfUserIsSeller = true;
      } else {
        this.checkIfUserIsSeller = false;
      }
      this.checkIfUserLoggedIn = true;
    } else {
      this.checkIfUserLoggedIn = false;
    }
  }

  logout(item: boolean) {
    localStorage.clear();
    this.checkIfUserLoggedIn = item;
    this.cdr.detectChanges();
  }
}
