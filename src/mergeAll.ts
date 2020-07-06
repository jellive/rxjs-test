import { fromEvent, interval } from 'rxjs'
import { map, mergeAll } from 'rxjs/operators'

document.getElementById('btn')
const clicks = fromEvent(document, 'click')
const higherOrder = clicks.pipe(map((ev) => interval(1000)))
const firstOrder = higherOrder.pipe(mergeAll()) // mergeAll안에 2를 넣으면 타이머 2개만 허용.
firstOrder.subscribe((x) => console.log(x))
