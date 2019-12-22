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
var r=function(){return(r=Object.assign||function(r){for(var t,n=1,e=arguments.length;n<e;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r}).apply(this,arguments)};function t(r,e){var o=r[e];if(!o)for(var u in r){var c=r[u];n.object(c)&&(o=t(c,e))}return o}var n={object:function(r){return"[object Object]"===Object.prototype.toString.call(r)}};function e(n){var e={},o=new n,u=Object.keys(o);return{from:function(n){return e=r({},n),function(){for(var r=0,n=u;r<n.length;r++){var c=n[r];o[c]=t(e,c)}return o}()},exclude:function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return u=u.filter((function(t){return!r.includes(t)})),this},only:function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return u=r,this},pluck:function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return u.push.apply(u,r),this}}}export{e as toClass};
