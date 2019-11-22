import {Component, OnDestroy, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Observable, Subscription} from 'rxjs';
import {map, pluck, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {

  myServiceObservable$: Subscription;
  myServiceOperatorObservable$: Observable<any>;
  myServiceOperatorSubscription$: Subscription;


  constructor(private myService: MyServiceService) { }

  //** Comment out and uncomment below code, and switch between page1 and page2 to observe basic observable behaviors
  ngOnInit() {
    //** Call observable function by subscribing to it and passing in an "observer" object.
    //** Remember, this subscription needs to unsubscribe to prevent memory leaks. (see ngOnDestroy() below)

    // const myObserver = {
    //   next: value => console.log(value),
    //   error: err => console.log(`This is my error: ${err}.`),
    //   complete: () => console.log('This observable has ended.')
    // };
    // this.myServiceObservable$ = this.myService.myObservable$.subscribe(myObserver);

    //** Call observable function by subscribing to it and then use the "observer" in more of a callback style
    //** This has the exact same functionality as the above code.
    //** Remember, this subscription needs to unsubscribe to prevent memory leaks. (see ngOnDestroy() below)

    // this.myServiceObservable$ = this.myService.myObservable$.subscribe(
    //   value => console.log(value),
    //   err => console.log(`This is my error: ${err}.`),
    //   () => console.log('This observable has ended.')
    // );

    //** Using operators inside of a pipe gives you the true power of rxjs.
    //** Rxjs has tons of operators for every situation.... so cool!
    //** The below code will tear down subscription after 4 values are passed,
    //** then will pull out the "name" value with pluck, and finally log that name with tap.
    //** Remember, if you're not using an operator similar to take(), then you will have to unsubscribe to stop memory leaks.

    // this.myServiceOperatorSubscription$ = this.myService.myObservable$.pipe(
    //   take(4),
    //   pluck('name'),
    //   tap(value => console.log(value)),
    // ).subscribe();

    //** Using the angular async pipe in the template ("|") allows us to pipe the observable values
    //** straight through the component and into the template as long as we are using a map
    //** operator to return those values.  The async pipe will also take care of unsubscribing
    //** automatically upon destruction of component

    this.myServiceOperatorObservable$ = this.myService.myObservable$.pipe(
      tap(value => console.log(value)),
      map(value => value)
    );

  }

  ngOnDestroy(): void {
    //** This is an option for a safe space to unsubscribe to all observables created in component
    //** if you aren't already doing so with operators.

    // this.myServiceObservable$.unsubscribe();
  }

}
