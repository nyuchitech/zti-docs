```javascript
// OpenWidget chat integration
window.__ow = window.__ow || {};
window.__ow.organizationId = "277bc925-7eee-49fd-984a-91b797e0685f";
window.__ow.integration_name = "manual_settings";
window.__ow.product_name = "openwidget";   

;(function(n,t,c){
  function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
  var e={
    _q:[],
    _h:null,
    _v:"2.0",
    on:function(){i(["on",c.call(arguments)])},
    once:function(){i(["once",c.call(arguments)])},
    off:function(){i(["off",c.call(arguments)])},
    get:function(){
      if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");
      return i(["get",c.call(arguments)])
    },
    call:function(){i(["call",c.call(arguments)])},
    init:function(){
      var n=t.createElement("script");
      n.async=!0,
      n.type="text/javascript",
      n.src="https://cdn.openwidget.com/openwidget.js",
      t.head.appendChild(n)
    }
  };
  !n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e
}(window,document,[].slice));

// Add noscript fallback message
document.addEventListener('DOMContentLoaded', function() {
  const noscriptEl = document.createElement('noscript');
  noscriptEl.innerHTML = 'You need to enable JavaScript to use the communication tool powered by OpenWidget';
  document.body.appendChild(noscriptEl);
});
```