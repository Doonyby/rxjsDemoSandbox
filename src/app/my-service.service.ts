import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  myObservable$: Observable<any>;

  anArrayOfStuff = [
    {name: 'bill', age: 1, id: 'wqer'},
    {name: 'bob', age: 2, id: 'rtyu'},
    {name: 'ben', age: 3, id: 'zsgj'},
    {name: 'bev', age: 4, id: 'ofgj'},
    {name: 'barry', age: 5, id: 'ghkj'},
    {name: 'bran', age: 6, id: 'qyil'},
    {name: 'beth', age: 7, id: 'pjdd'},
    {name: 'blair', age: 8, id: 'tttt'},
    {name: 'brit', age: 100, id: 'woss'},
  ];

  constructor() {
    //** An observable is just a function that links an observer with producer.
    //** Producers can be anything that spits out data...in this case our producer is
    //** "anArrayOfStuff[]" inside a for loop with a timeout on each value.
    //** The observer in this case will be the page1 component.
    this.myObservable$ = new Observable((observer) => {
      for(let i=0; i < this.anArrayOfStuff.length; i++) {
        setTimeout(() => {
          //** Toggle this code to see error callbacks fire.
          //** Error will tear down all observers subscribed to observable

          if(this.anArrayOfStuff[i].name === 'barry') {
            observer.error('barry is stupid');
          }

          observer.next(this.anArrayOfStuff[i]);
        }, i*1000);
      }

      //** Toggle this code to see completion callbacks fire.
      //** Completing an observer automatically ends all observers subscribed to observable

      // setTimeout(() => {
      //   observer.complete();
      // }, 9500);

      return () => {
        console.log('Executing teardown code.');
      };
    });

  }
}
