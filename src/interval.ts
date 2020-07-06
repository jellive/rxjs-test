/**
 * interval
 * @description 일정시간마다 stream으로 값을 흘려 보냄
 * @example 이용 시간 표시
 */

import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

const numbers = interval(1000)
const takeFourNumbers = numbers.pipe(take(4))
takeFourNumbers.subscribe((x) => console.log('Next: ', x))
