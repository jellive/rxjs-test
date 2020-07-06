/**
 * 기본 subscription
 */
import { Subscription, of } from 'rxjs'
import { map, filter } from 'rxjs/operators'

class Test {
  private subscription: Subscription

  ngOnInit() {
    this.subscription = of('복숭아', '물고기')
      .pipe(
        filter((v) => v === '복숭아'),
        map((v) => v + '통조림')
      )
      .subscribe(console.log)
  }

  ngOnDestroy() {
    console.log('onDestroy')
    this.subscription.unsubscribe()
  }
}

const obj = new Test()
obj.ngOnInit()
obj.ngOnDestroy()

// import fetch from 'node-fetch'
// import {from} from 'rxjs'
// import
