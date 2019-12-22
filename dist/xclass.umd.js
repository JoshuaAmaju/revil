!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).scribe={})}(this,(function(t){"use strict";
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
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function n(t,e){var o=t[e];if(!o)for(var u in t){var f=t[u];r.object(f)&&(o=n(f,e))}return o}var r={object:function(t){return"[object Object]"===Object.prototype.toString.call(t)}};t.toClass=function(t){var r={},o=new t,u=Object.keys(o);return{from:function(t){return r=e({},t),function(){for(var t=0,e=u;t<e.length;t++){var f=e[t];o[f]=n(r,f)}return o}()},exclude:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return u=u.filter((function(e){return!t.includes(e)})),this},only:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return u=t,this},pluck:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return u.push.apply(u,t),this}}},Object.defineProperty(t,"__esModule",{value:!0})}));
