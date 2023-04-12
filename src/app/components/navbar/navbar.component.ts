import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
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

  logout(check: boolean) {
    localStorage.clear();
    this.checkIfUserLoggedIn = check;
    this.cdr.detectChanges();
    this.router.navigate(['/home']);
  }
}
