import{_ as t,a as n,b as r,c as e,i as s,s as o,d as c,S as a,e as f,A as u,f as i,g as l,B as h,h as p,j as v,k as g,l as d,C as m,p as y,t as R,u as E,D as b,n as j,E as x}from"./client.e5eb7018.js";function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(e){var c=n(this).constructor;s=Reflect.construct(o,arguments,c)}else s=o.apply(this,arguments);return r(this,s)}}function A(t,n,r){var e=t.slice();return e[1]=n[r],e}function B(t){var n,r,e,s,o=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),e=u(o),this.h()},l:function(t){n=i(t,"LI",{});var s=l(n);r=i(s,"A",{rel:!0,href:!0});var c=l(r);e=h(c,o),c.forEach(p),s.forEach(p),this.h()},h:function(){v(r,"rel","prefetch"),v(r,"href",s="blog/"+t[1].slug)},m:function(t,s){g(t,n,s),d(n,r),d(r,e)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&m(e,o),1&n&&s!==(s="blog/"+t[1].slug)&&v(r,"href",s)},d:function(t){t&&p(n)}}}function L(t){for(var n,r,e,s,o,c=t[0],a=[],m=0;m<c.length;m+=1)a[m]=B(A(t,c,m));return{c:function(){n=y(),r=f("h1"),e=u("Recent posts"),s=y(),o=f("ul");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){R('[data-svelte="svelte-hfp9t8"]',document.head).forEach(p),n=E(t),r=i(t,"H1",{});var c=l(r);e=h(c,"Recent posts"),c.forEach(p),s=E(t),o=i(t,"UL",{class:!0});for(var f=l(o),u=0;u<a.length;u+=1)a[u].l(f);f.forEach(p),this.h()},h:function(){document.title="Blog",v(o,"class","svelte-1ect80f")},m:function(t,c){g(t,n,c),g(t,r,c),d(r,e),g(t,s,c),g(t,o,c);for(var f=0;f<a.length;f+=1)a[f].m(o,null)},p:function(t,n){var r=b(n,1)[0];if(1&r){var e;for(c=t[0],e=0;e<c.length;e+=1){var s=A(t,c,e);a[e]?a[e].p(s,r):(a[e]=B(s),a[e].c(),a[e].m(o,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=c.length}},i:j,o:j,d:function(t){t&&p(n),t&&p(r),t&&p(s),t&&p(o),x(a,t)}}}function S(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function k(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var q=function(n){t(f,a);var r=D(f);function f(t){var n;return e(this,f),n=r.call(this),s(c(n),t,k,L,o,{posts:0}),n}return f}();export default q;export{S as preload};
