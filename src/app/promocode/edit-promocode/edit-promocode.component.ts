import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {PromoCode} from "../../models/promoCode.model";
@Component({
  selector: 'app-edit-promocode',
  templateUrl: './edit-promocode.component.html',
  styleUrls: ['./edit-promocode.component.scss']
})
export class EditPromocodeComponent implements OnInit {

  constructor(private http: HttpClient, private toastr: ToastrService, private authService: AuthService, private router: Router) { }
  promoCodes: PromoCode[]=[];

  ngOnInit() {
    if(!this.authService.isAdmin()) {
      this.router.navigateByUrl('/');
    }
    this.getPromoCodes();
  }

  getPromoCodes() {
    this.http.get<PromoCode[]>('/api/v1/promocodes').pipe()
      .subscribe(promocode => {
          this.promoCodes = promocode;
        }
      )
  }

  removePromoCode(promoID : String) {
    this.http.delete<PromoCode>('/api/v1/promocodes/' + promoID).subscribe( () => {
        this.ngOnInit();
        this.toastr.error('Succesvol verwijderd!', 'Promocode verwijderd!');
      }
    )

  }
}
