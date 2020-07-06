/**
 * debounceTime
 * @description 최후의 값이 오고 일정시간 경과하면 다음으로 진행한다. (switchMap과 비슷한 듯?)
 * @example Auto complete 구현
 */

import { fromEvent } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

const btn = document.getElementById('btn')
const clicks = fromEvent(btn, 'click')
const result = clicks.pipe(debounceTime(3000))
result.subscribe((x) => console.log(x))
