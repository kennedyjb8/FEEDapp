import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  selectedUserTypes= [];
  userTypes= [
    "Producer",
    "Consumer",
    "Food Entrepreneur",
    "Investor",
    "Worker",
    "Event Host"
  ];
  featuredUsers = {
    'Producer': 'Nia',
    'Consumer': 'Andrew',
    'Food Entrepreneur': 'Carlos',
    'Investor': 'Darius',
    'Worker': 'James',
    'Event Host': 'Matt'
  };

  constructor() {}
  ngOnInit() {

  }
  showBlurb(userType) {
    console.log('this was clicked')
    console.log(userType);
    if (!(this.selectedUserTypes.includes(userType))) {
      this.selectedUserTypes.push(userType)
      console.log(this.selectedUserTypes)
    }
  }
}
/*
export class MarketplacePage implements OnInit {
  marketplaceItems: any;
  nonMatchingItems = [];
  userTags = []
  constructor() { }

  ngOnInit() {
    this.marketplaceItems = [
      {
        title: 'Fresh Foods',
        tags: ["fresh", "local", "eco-conscious"],
        url: 'https://www.subway.com',
      },
      {
        title: "Hubert's Hogs",
        tags: ["meat", "local", "pork"],
        url: 'https://www.subway.com',
      },

      {
        title: "Grace's Goats",
        tags: ["dairy", "fresh", 'eco-conscious'],
        url: 'https://www.walmart.com',
      },
      {
        title: "Ivan's Ibexes",
        tags: ["dairy", "eco-conscious", "niche"],
        url: 'https://www.walmart.com',
      },
      {
        title: "Dante's Donkeys",
        tags: ["dairy", "eco-conscious", "local"],
        url: 'https://www.walmart.com',
      },
      {
        title: "Clarisse's Corn",
        tags: ["vegan", "local", "agriculture"],
        url: 'https://www.walmart.com',
      },
      {
        title: "Saul's Steaks",
        tags: ["meat", "beef", "local"],
        url: 'https://www.walmart.com',
      },
      {
        title: "Sandra's Strawberries",
        tags: ["fruit", "agriculture", "niche"],
        url: 'https://www.walmart.com',
      }
    ];
    this.nonMatchingItems = [];
    this.userTags = []
  }
  onEnter(inputTag){
    this.marketplaceItems = this.marketplaceItems.concat(this.nonMatchingItems);
    this.userTags.push(inputTag)
    console.log(inputTag)
    var mpI = this.marketplaceItems;
    var counter = 0;
    var naughtylist = [];
    for (let mpItem in mpI) {
      for (let tagIndex in mpI[mpItem].tags){
        for (let a in this.userTags) {
          if (mpI[mpItem].tags[tagIndex] == this.userTags[a]){
            counter = 1;
          }

          else {
            console.log(mpI[mpItem].tags[tagIndex], '!=', this.userTags)
          }
        }
      };
      if (counter == 0) {
        naughtylist.push(mpItem)
      };
      counter = 0;
    }
    naughtylist.sort();
    naughtylist.reverse();
    for (let a in naughtylist) {
      this.nonMatchingItems.push(this.marketplaceItems[naughtylist[a]]);
      this.marketplaceItems.splice(naughtylist[a], 1);
    }
    console.log(naughtylist);
    console.log(this.marketplaceItems);
  }

}
*/
