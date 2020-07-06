"use strict";
exports.__esModule = true;
/**
 * 기본 subscription
 */
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.ngOnInit = function () {
        this.subscription = rxjs_1.of('복숭아', '물고기')
            .pipe(operators_1.filter(function (v) { return v === '복숭아'; }), operators_1.map(function (v) { return v + '통조림'; }))
            .subscribe(console.log);
    };
    Test.prototype.ngOnDestroy = function () {
        console.log('onDestroy');
        this.subscription.unsubscribe();
    };
    return Test;
}());
var obj = new Test();
obj.ngOnInit();
obj.ngOnDestroy();
// import fetch from 'node-fetch'
// import {from} from 'rxjs'
// import
