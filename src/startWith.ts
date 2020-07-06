/**
 * startWith
 * @description 최초에 흘려보내는 값을 지정한다.
 * @example 경과시간표시
 */

import { of } from 'rxjs'
import { startWith } from 'rxjs/operators'

of('from source')
  .pipe(startWith('first', 'second'))
  .subscribe((x) => console.log(x))
