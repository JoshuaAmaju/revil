/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * traverses the entire object unitl
 * the specified value is found.
 * Not: Does not cover arrays.
 */
function deepFind(box, value) {
    var result = box[value];
    if (!result) {
        for (var key in box) {
            var item = box[key];
            if (is.object(item)) {
                result = deepFind(item, value);
            }
        }
    }
    return result;
}
var is = {
    object: function (box) {
        return Object.prototype.toString.call(box) === "[object Object]";
    }
};
//# sourceMappingURL=utils.js.map

function toClass(instance) {
    var _json = {};
    var _instance = new instance();
    var _pool = Object.keys(_instance);
    var exec = function () {
        for (var _i = 0, _pool_1 = _pool; _i < _pool_1.length; _i++) {
            var key = _pool_1[_i];
            _instance[key] = deepFind(_json, key);
        }
        return _instance;
    };
    return {
        from: function (json) {
            _json = __assign({}, json);
            return exec();
        },
        exclude: function () {
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            _pool = _pool.filter(function (v) { return !values.includes(v); });
            return this;
        },
        only: function () {
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            _pool = values;
            return this;
        },
        pluck: function () {
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            _pool.push.apply(_pool, values);
            return this;
        }
    };
}

export { toClass };
