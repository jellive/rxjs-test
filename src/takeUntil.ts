/**
 * takeUntil
 * @description 값이 흘러가면 처리를 중단.
 * @example 컴포넌트를 파기할 때, Subject를 통해 스트림 종료통지를 보낸다.
 */

import { fromEvent, interval } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

const btn = document.getElementById('btn')
const source = interval(1000)
const clicks = fromEvent(btn, 'click')
const result = source.pipe(takeUntil(clicks))
result.subscribe((x) => console.log(x))
