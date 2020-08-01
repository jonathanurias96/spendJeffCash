import { Injectable } from '@angular/core';
import { orderBy } from 'lodash';

import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class BillionaireService {
  money = 183000000000
  products = [
    {
      photo: "assets/images/apache-helicopter.jpg",
      name: "Apache Helicopter",
      price: 31000000,
    },
    {
      photo: "assets/images/boeing-747.jpg",
      name: "Boeing 747",
      price: 148000000,
    },
    {
      photo: "assets/images/diamond-ring.jpg",
      name: "Diamond Ring",
      price: 10000,
    },
    {
      photo: "assets/images/ferrari.jpg",
      name: "Ferrari",
      price: 250000,
    },
    {
      photo: "assets/images/ford-f-150.jpg",
      name: "Ford F-150",
      price: 30000,
    },
    {
      photo: "assets/images/formula-1-car.jpg",
      name: "Formula 1 Car",
      price: 15000000,
    },
    {
      photo: "assets/images/gold-bar.jpg",
      name: "Gold Bar",
      price: 700000,
    },
    {
      photo: "assets/images/horse.jpg",
      name: "Horse",
      price: 2500,
    },
    {
      photo: "assets/images/lobster-dinner.jpg",
      name: "Lobster Dinner",
      price: 45,
    },
    {
      photo: "assets/images/m1-abrams.jpg",
      name: "M1 Abrams",
      price: 8000000,
    },
    {
      photo: "assets/images/make-a-movie.jpg",
      name: "Make a Movie",
      price: 100000000,
    },
    {
      photo: "assets/images/mansion.jpg",
      name: "Mansion",
      price: 45000000,
    },
    {
      photo: "assets/images/mcdonalds-franchise.jpg",
      name: "McDonalds Franchise",
      price: 1500000,
    },
    {
      photo: "assets/images/mona-lisa.jpg",
      name: "Mona Lisa",
      price: 780000000,
    },
    {
      photo: "assets/images/monster-truck.jpg",
      name: "Monster Truck",
      price: 150000,
    },
    {
      photo: "assets/images/nba-team.jpg",
      name: "NBA Team",
      price: 2120000000,
    },
    {
      photo: "assets/images/rolex.jpg",
      name: "Rolex",
      price: 15000,
    },
    {
      photo: "assets/images/single-family-home.jpg",
      name: "Single Family Home",
      price: 300000,
    },
    {
      photo: "assets/images/skyscraper.jpg",
      name: "Skyscraper",
      price: 850000000,
    },
    {
      photo: "assets/images/superbowl-ad.jpg",
      name: "Superbowl Ad",
      price: 5250000,
    },
    {
      photo: "assets/images/tesla.jpg",
      name: "Tesla",
      price: 75000,
    },
    {
      photo: "assets/images/yacht.jpg",
      name: "Yacht",
      price: 7500000,
    }
  ]

  constructor(
    private cart: CartService
  ) { }

  getMoney() {
    return this.money
  }
  spendMoney(product) {
    if(this.money >= product.price) {
      this.money -= product.price;
    } else {
      alert("You run out of dough!")
    }
  }
  getMoneyBack(product) {
    if(this.cart.currentCart[product.name]) {
      this.money += product.price
    } else {
      alert("You kidding me?")
    }
  }
  getSortedProducts() {
    return orderBy(this.products, ['price'], ["asc"])
  }
}
