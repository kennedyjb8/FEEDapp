import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  eventsList = [{
    name: 'FEED kickoff',
    date: 'August 15th',
    zipCode: 27705,
    host: 'Self-Help Credit Union'
  },
  {
    name: 'Triangle Pork Summit',
    date: 'September 20th',
    zipCode: 27514,
    host: "Porky the Pig's Pork"
  },
  {
    name: 'Duke Food Symposium',
    date: 'December 25th',
    zipCode: 27708,
    host: 'Duke University',
  }];
  constructor() { }

  ngOnInit() {

  }

}
