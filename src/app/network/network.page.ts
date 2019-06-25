import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {
  hardcodedUsers: any;
  buttonPure: boolean;
  selectedCategories: any;
  selectedTags = [];
  selectedissueTags = [];
  inputTag: any;
  inputissueTag: any;
  orderedList = [];
  constructor() {
  }

  ngOnInit() {
    this.buttonPure = true;
    this.hardcodedUsers = [
      {
        title: 'Fresh Foods',
        tags: ["fresh", "local", "eco-conscious"],
        url: 'https://www.subway.com',
        category: ['producer'],
        rankindex: 0,
        microloan: "https://www.kiva.org/lend/1766102",
        marketplace: "https://durhamfarmersmarket.com/vendors/by-product/",
        issueTags: ['Opportunity Zone', 'Food Desert'],
      },
      {
        title: "Hubert's Hogs",
        tags: ["meat", "local", "pork"],
        url: 'https://www.subway.com',
        category: ['producer'],
        rankindex: 0,
        microloan: "https://www.kiva.org/lend/1784758",
        marketplace: "https://durhamfarmersmarket.com/vendors/by-product/",
        issueTags: ['Credit Desert', 'Food Desert'],
      },

      {
        title: "Grace's Goats",
        tags: ["dairy", "fresh", 'eco-conscious'],
        url: 'https://www.walmart.com',
        category: ['producer'],
        rankindex: 0,
        microloan: "https://www.kiva.org/lend/1783698",
        marketplace: "https://durhamfarmersmarket.com/vendors/by-product/",
        issueTags: ['Gender Equality', 'Opportunity Zone'],
      },
      {
        title: "Ivan's Ibexes",
        tags: ["dairy", "eco-conscious", "niche"],
        url: 'https://www.walmart.com',
        category: ['producer'],
        rankindex: 0,
        microloan: "https://www.kiva.org/lend/1783698",
        marketplace: "https://durhamfarmersmarket.com/vendors/by-product/",
        issueTags: ['Livable Wages', 'Credit Desert'],
      },
      {
        title: "Dante's Donkeys",
        tags: ["dairy", "eco-conscious", "local"],
        url: 'https://www.walmart.com',
        category: ['producer'],
        rankindex: 0,
        microloan: "https://www.kiva.org/lend/1780899",
        marketplace: "https://durhamfarmersmarket.com/vendors/by-product/",
        issueTags: ['Livable Wages', 'Food Desert'],
      },
      {
        title: "Clarisse's Corn",
        tags: ["vegan", "local", "agriculture"],
        url: 'https://www.walmart.com',
        category: ['producer'],
        rankindex: 0,
        microloan: "https://www.kiva.org/lend/1782775",
        marketplace: "https://durhamfarmersmarket.com/vendors/by-product/",
        issueTags: ['Gender Equality', 'Livable Wages'],
      },
      {
        title: "Saul's Steaks",
        tags: ["meat", "beef", "local"],
        url: 'https://www.walmart.com',
        category: ['producer'],
        rankindex: 0,
        microloan: "https://www.kiva.org/lend/1784764",
        marketplace: "https://durhamfarmersmarket.com/vendors/by-product/",
        issueTags: ['Livable Wages', 'Food Desert'],
      },
      {
        title: "Sandra's Strawberries",
        tags: ["fruit", "agriculture", "niche"],
        url: 'https://www.walmart.com',
        category: ['producer'],
        rankindex: 0,
        microloan: "https://www.kiva.org/funded/1784430?minimal=true",
        marketplace: "https://durhamfarmersmarket.com/vendors/by-product/",
        issueTags: ['Gender Equality', 'Livable Wages'],
      },
      {
        title: "Javi's Tacos",
        tags: ['meat', 'local'],
        url: 'https://www.walmart.com',
        category: ['food entrepreneur', 'consumer'],
        rankindex: 0,
        microloan: "https://www.kiva.org/lend/1766488",
        marketplace: "https://durhamfarmersmarket.com/vendors/by-product/",
        issueTags: ['Credit Desert', 'Food Desert'],
      },
    ];
    this.selectedCategories = ['food entrepreneur', 'consumer', 'producer'];
  }
  catSelect(category) {
    if ((this.selectedCategories.includes(category)) && (this.buttonPure == false)) {
      console.log("well this is awkward");
      console.log(this.selectedCategories)
    }
    else {
      if (this.buttonPure == true) {
        this.selectedCategories = [];
      }
      this.selectedCategories.push(category)
      console.log(category + "was just added to selectedCategories, which is now " + this.selectedCategories)
      this.buttonPure = false;
    };
  }
  catDeselect(category) {
    console.log(this.selectedCategories)
    if (this.selectedCategories.includes(category)) {
      var index = this.selectedCategories.indexOf(category);
      if (index !== -1) this.selectedCategories.splice(index, 1);
      console.log(category + ' was removed')
    }
    else {
      "something's funky but it's ok"
    };
  }
  /*
  OLD VERSION, keeping as backup
  onEnter(inputTag){
    if (this.selectedTags.includes(inputTag)) {
      console.log('tag already active')
    }
    else{
      this.selectedTags.push(inputTag)
      console.log(this.selectedTags)
    };
  }*/
  addTag(){
    if (this.selectedTags.includes(this.inputTag)) {
      console.log('tag already active')
    }
    else{
      this.selectedTags.push(this.inputTag)
      console.log(this.selectedTags)
    };
    this.inputTag = '';
    for (let hardcodedUser of this.hardcodedUsers) {
      hardcodedUser.rankindex = 0;
      for (let tag of hardcodedUser.tags) {
        if (this.selectedTags.includes(tag)) {
          hardcodedUser.rankindex += 1;
        }
      };
      for (let issueTag of hardcodedUser.issueTags) {
        if (this.selectedissueTags.includes(issueTag)) {
          hardcodedUser.rankindex += 1;
        }
      }
    }
    function compare( a, b ){
      if ( a.rankindex > b.rankindex ) {
        return -1;
      }
      if ( a.rankindex < b.rankindex ) {
        return 1;
      }
      return 0;
    }
    this.hardcodedUsers.sort( compare );
  }
  addIssueTag(){
    if (this.selectedissueTags.includes(this.inputissueTag)) {
      console.log('issue tag already active')
    }
    else{
      this.selectedissueTags.push(this.inputissueTag)
      console.log(this.selectedissueTags)
    };
    this.inputissueTag = '';
    for (let hardcodedUser of this.hardcodedUsers) {
      hardcodedUser.rankindex = 0;
      for (let tag of hardcodedUser.tags) {
        if (this.selectedTags.includes(tag)) {
          hardcodedUser.rankindex += 1;
        }
      };
      for (let issueTag of hardcodedUser.issueTags) {
        if (this.selectedissueTags.includes(issueTag)) {
          hardcodedUser.rankindex += 1;
        }
      }
    }
    function compare( a, b ){
      if ( a.rankindex > b.rankindex ) {
        return -1;
      }
      if ( a.rankindex < b.rankindex ) {
        return 1;
      }
      return 0;
    }
    this.hardcodedUsers.sort( compare );
  }
  removeTag(remtag){
    console.log(remtag);
    console.log(this.selectedTags)
    if (this.selectedTags.includes(remtag)) {
      var index = this.selectedTags.indexOf(remtag);
      if (index !== -1) this.selectedTags.splice(index, 1);
      console.log(remtag + ' was removed')
    }
    else {
      "something's funky but it's ok"
    };
    for (let hardcodedUser of this.hardcodedUsers) {
      hardcodedUser.rankindex = 0;
      for (let tag of hardcodedUser.tags) {
        if (this.selectedTags.includes(tag)) {
          hardcodedUser.rankindex += 1;
        }
      };
      for (let issueTag of hardcodedUser.issueTags) {
        if (this.selectedissueTags.includes(issueTag)) {
          hardcodedUser.rankindex += 1;
        }
      }
    }
    function compare( a, b ){
      if ( a.rankindex > b.rankindex ) {
        return -1;
      }
      if ( a.rankindex < b.rankindex ) {
        return 1;
      }
      return 0;
    }
    this.hardcodedUsers.sort( compare );
  }
  removeIssueTag(remtag){
    console.log(remtag);
    console.log(this.selectedissueTags)
    if (this.selectedissueTags.includes(remtag)) {
      var index = this.selectedissueTags.indexOf(remtag);
      if (index !== -1) this.selectedissueTags.splice(index, 1);
      console.log(remtag + ' was removed')
    }
    else {
      "something's funky but it's ok"
    };
    for (let hardcodedUser of this.hardcodedUsers) {
      hardcodedUser.rankindex = 0;
      for (let tag of hardcodedUser.tags) {
        if (this.selectedTags.includes(tag)) {
          hardcodedUser.rankindex += 1;
        }
      };
      for (let issueTag of hardcodedUser.issueTags) {
        if (this.selectedissueTags.includes(issueTag)) {
          hardcodedUser.rankindex += 1;
        }
      }
    }
    function compare( a, b ){
      if ( a.rankindex > b.rankindex ) {
        return -1;
      }
      if ( a.rankindex < b.rankindex ) {
        return 1;
      }
      return 0;
    }
    this.hardcodedUsers.sort( compare );
  }

}
