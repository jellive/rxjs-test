/**
 * map
 * @description 스트림의 값을 가공 / 변환 / 추출한다.
 * @example API의 응답결과를 가공한다. (필요한 값을 추출한다.)
 */

import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

const btn = document.getElementById('btn')
const clicks = fromEvent(btn, 'click')
const positions = clicks.pipe(map((ev: any) => ev.clientX + 100 + 'ggggggg'))
positions.subscribe((x) => console.log(x))

/**
 * pluck
 * @description 스트림의 값을 가공 / 변환 / 추출한다.
 *              map과의 차이점은 속성에 접근하는 형태로 들어간다. (버튼의 label 같은.)
 */

import { pluck } from 'rxjs/operators'

const tagNames = clicks.pipe(pluck('target', 'textContext'))
tagNames.subscribe((x) => console.log(x))
