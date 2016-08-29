exports = module.exports;
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.slackUsersWt=e()}}(function(){return function e(t,r,n){function o(s,a){if(!r[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=r[s]={exports:{}};t[s][0].call(d.exports,function(e){var r=t[s][1][e];return o(r?r:e)},d,d.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){"use strict";var n=e("slack-users");t.exports=function(e,t){var r=e.data.SLACK_TEAM,o=e.data.SLACK_TOKEN;if(!r)return t(new Error("Invalid SLACK_TEAM property."));if(!o)return t(new Error("Invalid SLACK_TOKEN property."));var i={team:r,token:o};n(i,t)}},{"slack-users":2}],2:[function(e,t,r){"use strict";function n(e,t){return"https://"+e+".slack.com/api/users.list?token="+t+"&presence=1"}var o=e("extend-shallow"),i=e("simple-get");t.exports=function(e,t){"function"==typeof e&&(t=e,e={});var r=o({},e),s=r.team,a=r.token;return s?a?void i.concat({url:n(s,a),json:!0},function(e,r,n){return e||r&&200!==r.statusCode?t(e):n.ok===!1?t(new Error(n.error)):void t(null,n.members)}):t(new Error('Invalid "token" option.')):t(new Error('Invalid "team" option.'))}},{"extend-shallow":3,"simple-get":5}],3:[function(e,t,r){"use strict";function n(e,t){for(var r in t)o(t,r)&&(e[r]=t[r])}function o(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var i=e("is-extendable");t.exports=function(e){i(e)||(e={});for(var t=arguments.length,r=1;r<t;r++){var o=arguments[r];i(o)&&n(e,o)}return e}},{"is-extendable":4}],4:[function(e,t,r){"use strict";t.exports=function(e){return"undefined"!=typeof e&&null!==e&&("object"==typeof e||"function"==typeof e)}},{}],5:[function(e,t,r){function n(e,t){e="string"==typeof e?{url:e}:i(e),t=u(t),e.url&&o(e),null==e.headers&&(e.headers={}),null==e.maxRedirects&&(e.maxRedirects=10);var r=e.json?JSON.stringify(e.body):e.body;e.body=void 0,r&&!e.method&&(e.method="POST"),e.method&&(e.method=e.method.toUpperCase()),e.json&&(e.headers.accept="application/json"),e.json&&r&&(e.headers["content-type"]="application/json");var d=Object.keys(e.headers).some(function(e){return"accept-encoding"===e.toLowerCase()});d||(e.headers["accept-encoding"]="gzip, deflate");var p="https:"===e.protocol?a:s,f=p.request(e,function(r){if(r.statusCode>=300&&r.statusCode<400&&"location"in r.headers)return e.url=r.headers.location,o(e),r.resume(),e.maxRedirects-=1,void(e.maxRedirects>0?n(e,t):t(new Error("too many redirects")));var i="function"==typeof c&&"HEAD"!==e.method;t(null,i?c(r):r)});return f.on("error",t),f.end(r),f}function o(e){var t=d.parse(e.url);t.hostname&&(e.hostname=t.hostname),t.port&&(e.port=t.port),t.protocol&&(e.protocol=t.protocol),t.auth&&(e.auth=t.auth),e.path=t.path,delete e.url}t.exports=n;var i=e("xtend"),s=e("http"),a=e("https"),u=e("once"),c=e("unzip-response"),d=e("url");t.exports.concat=function(e,t){return n(e,function(r,n){if(r)return t(r);var o=[];n.on("data",function(e){o.push(e)}),n.on("end",function(){var r=Buffer.concat(o);if(e.json)try{r=JSON.parse(r.toString())}catch(e){return t(e,n,r)}t(null,n,r)})})},["get","post","put","patch","head","delete"].forEach(function(e){t.exports[e]=function(t,r){return"string"==typeof t&&(t={url:t}),t.method=e.toUpperCase(),n(t,r)}})},{http:void 0,https:void 0,once:void 0,"unzip-response":6,url:void 0,xtend:void 0}],6:[function(e,t,r){"use strict";var n=e("zlib");t.exports=function(e){if(["gzip","deflate"].indexOf(e.headers["content-encoding"])!==-1){var t=n.createUnzip();t.httpVersion=e.httpVersion,t.headers=e.headers,t.rawHeaders=e.rawHeaders,t.trailers=e.trailers,t.rawTrailers=e.rawTrailers,t.setTimeout=e.setTimeout.bind(e),t.statusCode=e.statusCode,t.statusMessage=e.statusMessage,t.socket=e.socket,e.on("close",function(){t.emit("close")}),e=e.pipe(t)}return e}},{zlib:void 0}]},{},[1])(1)});