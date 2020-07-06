/**
 * skip
 * @description 값을 스킵함
 * @example 컴포넌트 생성 직후에만 연동하는 처리를 스킵할 때
 */

import { interval } from 'rxjs'
import { skip } from 'rxjs/operators'

const source = interval(1000)
const example = source.pipe(skip(5)) // 5번 스킵.
const subscribe = example.subscribe((val) => console.log(val))
