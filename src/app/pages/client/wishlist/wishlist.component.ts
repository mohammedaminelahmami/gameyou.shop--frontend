import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishList: any = [];

  constructor() {}

  ngOnInit(): void {
    this.wishList = JSON.parse(localStorage.getItem('favorite') || '[]');
  }

  // deleteProductFromWishList(id: number) {
  //   const wishList = JSON.parse(localStorage.getItem('favorite') || '[]');
  //   const index = wishList.findIndex((item: any) => item.id == id);
  //   wishList.splice(index, 1);
  //   localStorage.setItem('favorite', JSON.stringify(wishList));
  //   this.wishList = wishList;
  // }
}
