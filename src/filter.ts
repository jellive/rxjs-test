/**
 * filter
 * @description 값을 취사선택
 * @example 라우팅 개시 이벤트 발생시에 로딩 스피너를 표시
 */

import { fromEvent, of, combineLatest } from 'rxjs'
import { filter, mergeMap } from 'rxjs/operators'

const btn = document.getElementById('btn')
const bts = document.getElementById('bts')

const btnE = fromEvent(btn, 'click')
const btsE = fromEvent(bts, 'click')
// const clicks = of(btnE, btsE)
// const clicksOnDivs = clicks.pipe(
//   mergeMap(filter((ev: any) => ev.target.tagName === 'DIV'))
// )
const clicks = combineLatest(btnE, btsE) // filter와 비슷하지만 더 추천한다고 함.
const clicksOnDivs = clicks.pipe(filter((ev) => ev[1] === ev[1]))
clicksOnDivs.subscribe((x) => console.log(x))
