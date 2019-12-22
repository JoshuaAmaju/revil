"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
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
var __assign=function(){return(__assign=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function deepFind(t,r){var n=t[r];if(!n)for(var e in t){var o=t[e];is.object(o)&&(n=deepFind(o,r))}return n}var is={object:function(t){return"[object Object]"===Object.prototype.toString.call(t)}};function toClass(t){var r={},n=new t,e=Object.keys(n);return{from:function(t){return r=__assign({},t),function(){for(var t=0,o=e;t<o.length;t++){var i=o[t];n[i]=deepFind(r,i)}return n}()},exclude:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e=e.filter((function(r){return!t.includes(r)})),this},only:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e=t,this},pluck:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.push.apply(e,t),this}}}exports.toClass=toClass;
