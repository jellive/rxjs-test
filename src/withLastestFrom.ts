/**
 * withLatestFrom
 * @description 합성한 스트림의 최신값을 결합한다. (Promise.all과 비슷비슷)
 * @example 두 개 이상의 데이터를 합쳐서 보여줄 떄 (id로 유저정보라던지...)
 */

import { interval } from 'rxjs'
import { withLatestFrom, map } from 'rxjs/operators'

const goldenMomo = interval(3000)
const momo = interval(1000)
const ex = goldenMomo.pipe(
  withLatestFrom(momo),
  map(([gold, momo]) => {
    return `gold: ${gold}, momo: ${momo}`
  })
)

ex.subscribe((val) => console.log(val))
