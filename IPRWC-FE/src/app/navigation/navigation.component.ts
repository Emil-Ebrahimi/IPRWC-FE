import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{
  imageSrc = 'assets/images/logo-webshop.jpg'

  constructor(private router: Router, private authService: AuthService) { }


  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
