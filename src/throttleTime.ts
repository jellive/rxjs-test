/**
 * throttleTime
 * @description 값이 흐르는 속도를 제어
 * @example 스크롤 이벤트의 제어
 */

import { fromEvent } from 'rxjs'
import { throttleTime } from 'rxjs/operators'

const clicks = fromEvent(document, 'click')
const result = clicks.pipe(throttleTime(3000)) // 클릭 이벤트로 콘솔이 찍히면 3초간 클릭 이벤트 무시
result.subscribe((x) => console.log(x))
