(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},35:function(e,t,a){},36:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),u=a.n(l),c=(a(35),a(7)),i=a(8),o=a(10),m=a(9),d=(a(36),a(11)),s=a.n(d),h=(a(54),a(12)),p=a(1),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log(e.target.quantityB.value);var t={id:n.state.Id,name:n.state.Name,productID:n.state.prdId,productQuantity:n.state.quantity,orderId:""};s.a.post("http://127.0.0.1:8081/placeOrder/",{Order:t}).then((function(e){e.data&&alert(JSON.stringify(e)),console.log(e)}))},n.state={ID:"",Name:"",prdId:"",quantity:""},n}return Object(i.a)(a,[{key:"handleChangeName",value:function(e){this.setState({Name:e.target.elements.name.value})}},{key:"handleChangeId",value:function(e){this.setState({ID:e.target.elements.ID.value})}},{key:"handleChangeQuantity",value:function(e){this.setState({quantity:e.target.elements.quantity.value})}},{key:"handleChangeProductId",value:function(e){this.setState({prdId:e.target.elements.product.value})}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,"Enter your name:"),r.a.createElement("input",{id:"cust_name",type:"text",name:"name",onChange:this.handleChangeName}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Enter your Id:"),r.a.createElement("input",{id:"cust_name",type:"text",name:"ID",onChange:this.handleChangeId}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"Burger",name:"product",value:"Burger",onChange:this.handleChangeProductId}),r.a.createElement("label",{for:"Burger"},"Burger"),"\xa0\xa0\xa0\xa0",r.a.createElement("input",{type:"number",id:"quantity",name:"quantity",min:"1",max:"5",onChange:this.handleChangeQuantity}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"Pizza",name:"product",value:"Pizza",onChange:this.handleChangeProductId}),r.a.createElement("label",{for:"Pizza"},"Pizza"),"\xa0\xa0\xa0\xa0",r.a.createElement("input",{type:"number",id:"quantity",name:"quantity",min:"1",max:"5",onChange:this.handleChangeQuantity}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"Sandwich",name:"product",value:"Sandwich",onChange:this.handleChangeProductId}),r.a.createElement("label",{for:"Sandwich"},"Sandwich"),"\xa0\xa0\xa0\xa0",r.a.createElement("input",{type:"number",id:"quantity",name:"quantity",min:"1",max:"5",onChange:this.handleChangeQuantity}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit"}))}}]),a}(n.Component),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t={ID:n.state.Id,orderID:n.state.orderId,orderStatus:n.state.orderStatus};s.a.post("http://127.0.0.1:8081/orderStatus/",{user:t}).then((function(e){e.data&&alert(JSON.stringify(e)),console.log(e)}))},n.state={Id:"",orderId:"",orderStatus:""},console.log(n.state.Id),n}return Object(i.a)(a,[{key:"handleChangeId",value:function(e){this.setState({Id:e.target.elements.ID.value})}},{key:"handleChangeOrdId",value:function(e){this.setState({Id:e.target.elements.orderId.value})}},{key:"handleChangeOrdStatus",value:function(e){this.setState({Id:e.target.elements.orderStatus.value})}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,"Enter your Id:"),r.a.createElement("input",{id:"cust_name",type:"text",name:"ID",onChange:this.handleChangeId}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Enter your order Id:"),r.a.createElement("input",{id:"order_name",type:"text",name:"orderID",onChange:this.handleChangeOrdId}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Enter your order Status:"),r.a.createElement("input",{id:"order_name",type:"text",name:"orderName",onChange:this.handleChangeOrdStatus}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit"}))}}]),a}(n.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),s.a.get("http://127.0.0.1:8081/order/"+n.state.Id+"/").then((function(e){e.data&&alert(JSON.stringify(e)),console.log(e)}))},n.state={ID:""},n}return Object(i.a)(a,[{key:"handleChangeId",value:function(e){this.setState({Id:e.target.elements.ID.value})}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,"Enter your ID to see all your orders!!"),r.a.createElement("input",{id:"cust_id",type:"text",name:"ID",onChange:this.handleChangeId}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit"}))}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to Your Own Kitchen"),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/createOrder",className:"nav-link"}," createOrder ")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/orderStatus",className:"nav-link"},"orderStatus")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/getOrder",className:"nav-link"},"getOrder")))),r.a.createElement("hr",null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/createOrder",component:E}),r.a.createElement(p.a,{path:"/orderStatus",component:g}),r.a.createElement(p.a,{path:"/getOrder",component:b}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(h.a,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.eb2f5cf5.chunk.js.map