import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, ProductDetailComponent],
  template: `
    <h2>Product Component Works!</h2>
    <a [routerLink]="['/detail',1]">Go to Product Detail for Product 1</a><br>
    <a [routerLink]="['/detail',2]">Go to Product Detail for Product 2</a><br>
    <router-outlet></router-outlet>
    
    <br>
    <ul *ngIf="photos?.length">
      <li *ngFor="let photo of photos">
        <!--<img [src]="photo.url" width="100" height="100"> -->
        <a [routerLink]="['/detail', photo.id]">{{ photo.title || photo.url }}</a>
      </li>
    </ul>
    
    `,

  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  constructor(private activatedRoute : ActivatedRoute) {}

  photos;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.photos = data["photos"];
    });    

}
}

