(this["webpackJsonpineor-assignment"]=this["webpackJsonpineor-assignment"]||[]).push([[0],{139:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(29),s=a.n(i),l=a(16),o=a(17),c=a(19),u=a(18),m=(a(75),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={gif:[],selectedGif:null},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://api.giphy.com/v1/gifs/search?api_key=KeTn0RgXZQF8EDkUGgQmSaJYuWPEz5mI&q=barber").then((function(e){return e.json()})).then((function(t){var a=t.data,n=a[Math.floor(Math.random()*a.length)];e.setState({gif:n.images.original.url},(function(){return console.log(e.state.gif)}))})).catch((function(e){alert("Failed to load gif "+e)}))}},{key:"render",value:function(){var e=this.state.gif;return r.a.createElement("div",{className:"section-booking-success"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"center-wrapper"},r.a.createElement("h2",null,"Appointment successfully booked"),r.a.createElement("div",{className:"success-gif-wrapper"},r.a.createElement("img",{alt:"Barber gif",src:e})))))}}]),a}(n.Component)),d=(a(76),a(65)),p=a.n(d),h=(a(54),a(48)),f=a.n(h),b=(a(77),a(79)),v=a(80),g=a(31),E=a(66),D=a.n(E),k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState({startDate:e,timeDisabled:!1,time:null,excludedTimes:[]});var a,r=e.getDay();for(1===r?n.setState({startHour:n.props.getWorkingHours.map((function(e){return e[0].startHour})),endHour:n.props.getWorkingHours.map((function(e){return e[0].endHour}))}):2===r?n.setState({startHour:n.props.getWorkingHours.map((function(e){return e[1].startHour})),endHour:n.props.getWorkingHours.map((function(e){return e[1].endHour}))}):3===r?n.setState({startHour:n.props.getWorkingHours.map((function(e){return e[2].startHour})),endHour:n.props.getWorkingHours.map((function(e){return e[2].endHour}))}):4===r?n.setState({startHour:n.props.getWorkingHours.map((function(e){return e[3].startHour})),endHour:n.props.getWorkingHours.map((function(e){return e[3].endHour}))}):n.setState({startHour:n.props.getWorkingHours.map((function(e){return e[4].startHour})),endHour:n.props.getWorkingHours.map((function(e){return e[4].endHour}))}),n.props.callbackGetDateValue(e),a=0;a<n.state.appointmentsDate.length;a++)if("".concat(e.toLocaleDateString())===n.state.appointmentsDate[a].toLocaleDateString()){var i=n.state.appointmentsDate[a],s=i.getHours(),l=i.getMinutes();return 3==n.props.serviceId&&30===l?n.setState({excludedTimes:[Object(b.default)(Object(v.default)(new Date,l),s),Object(b.default)(Object(v.default)(new Date,l-30),s+1)]}):3==n.props.serviceId&&0===l?n.setState({excludedTimes:[Object(b.default)(Object(v.default)(new Date,l),s),Object(b.default)(Object(v.default)(new Date,l+30),s)]}):n.setState({excludedTimes:[Object(b.default)(Object(v.default)(new Date,l),s)]})}},n.handleTime=function(e){n.setState({time:e}),n.props.callbackGetTimeValue(e)},n.state={startDate:null,startHour:null,endHour:null,timeDisabled:n.props.timeDisabled,time:null,appointments:null,excludedTimes:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(H+"/appointments").then((function(e){return e.json()})).then((function(t){var a=t.map((function(e){return e.startDate})).map((function(e){return new Date(1e3*e)}));e.setState({appointmentsDate:a})})).catch((function(e){alert("Failed to load our appointments"+e)}))}},{key:"render",value:function(){var e=this.state,t=e.startDate,a=e.startHour,n=e.endHour,i=D()().toDate();return r.a.createElement("div",null,r.a.createElement("div",{className:"input-wrapper"},r.a.createElement(f.a,{selected:t,onChange:this.handleChange.bind(this),filterDate:function(e){var t=e.getDay();return 0!==t&&6!==t},minDate:new Date,maxDate:Object(g.default)(new Date,5),disabled:this.props.datedisabled,placeholderText:"Select Date",dateFormat:"MMMM d, yyyy"}),r.a.createElement("span",{className:"error"},this.props.errors.date)),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement(f.a,{selected:this.state.time,onChange:this.handleTime.bind(this),showTimeSelect:!0,showTimeSelectOnly:!0,minTime:Object(b.default)(Object(v.default)(i,0),a),maxTime:Object(b.default)(Object(v.default)(i,30),n-1),timeIntervals:this.props.serviceDuration,disabled:this.state.timeDisabled,timeCaption:"Time",dateFormat:"h:mm aa",placeholderText:"Select Time",excludeTimes:this.state.excludedTimes}),r.a.createElement("span",{className:"error"},this.props.errors.time)))}}]),a}(n.Component),S=a(6),H="http://localhost:3004",y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).callbackGetDateValue=function(e){n.setState({dateValue:e.toLocaleDateString()});var t=n.state.fields;t.date=e,n.setState({fields:t})},n.callbackGetTimeValue=function(e){n.setState({timeValue:e.toLocaleTimeString()});var t=n.state.fields;t.time=e,n.setState({fields:t})},n.handleClick=function(e,t){var a=n.state.fields;a.service=t.target.value,n.setState({fields:a}),n.setState({price:t.target.value,dateDisabled:!1}),"1"===t.target.value?n.setState({servicePrice:"Price is 15$"}):"2"===t.target.value?n.setState({servicePrice:"Price is 20$"}):"3"===t.target.value&&n.setState({servicePrice:"Price is 30$"})},n.onChange=function(e,t){n.setState({getWorkingHours:n.state.barbers.map((function(e){return e.workHours})),serviceDisable:!1});var a=n.state.fields;a.barber=t.target.value,n.setState({fields:a})},n.state={fields:{},errors:{},barbers:[],services:[],startDate:new Date,price:null,servicePrice:"Service Price",dateDisabled:!0,timeDisabled:!0,serviceDuration:0,serviceDisable:!0,getWorkingHours:null,test:[],formValidated:null,dateValue:null,timeValue:null,postId:null},n}return Object(o.a)(a,[{key:"handleValidation",value:function(){var e=this.state.fields,t={},a=!0;if(e.name&&e.surname||(a=!1,t.name="Please enter your full name"),"undefined"!==typeof e.name&&(e.name.match(/^[a-zA-Z]+$/)||(a=!1,t.name="Only letters")),e.email||(a=!1,t.email="Please enter your email"),"undefined"!==typeof e.email){var n=e.email.lastIndexOf("@"),r=e.email.lastIndexOf(".");n<r&&n>0&&-1===e.email.indexOf("@@")&&r>2&&e.email.length-r>2||(a=!1,t.email="Please enter a valid email")}return e.phone||(a=!1,t.phone="Please enter phone number"),e.barber||(a=!1,t.barber="Please select a barber"),e.service||(a=!1,t.service="Please select a service"),e.date||(a=!1,t.date="Please select a date"),e.time||(a=!1,t.time="Please select the time"),this.setState({errors:t}),a}},{key:"handleChange",value:function(e,t){var a=this.state.fields;a[e]=t.target.value,this.setState({fields:a})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),this.handleValidation()){this.setState({formValidated:!0});var a=new Date(Date.parse(this.state.dateValue+" "+this.state.timeValue)),n=Math.floor(a.getTime()/1e3),r={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer my-token","My-Custom-Header":"foobar"},body:JSON.stringify({startDate:n,barberId:parseInt(this.state.fields.barber),serviceId:parseInt(this.state.fields.service)})};fetch("http://localhost:3004/appointments",r).then((function(e){return e.json()})).then((function(e){return t.setState({postId:e.id})}))}else this.setState({formValidated:!1})}},{key:"componentDidMount",value:function(){var e=this;fetch(H+"/barbers").then((function(e){return e.json()})).then((function(t){e.setState({barbers:t})})).catch((function(e){alert("Failed to load our Barbers"+e)})),fetch(H+"/services").then((function(e){return e.json()})).then((function(t){e.setState({services:t})})).catch((function(e){alert("Failed to load our Services"+e)}))}},{key:"render",value:function(){var e=this.state,t=e.barbers,a=e.services,n=e.servicePrice,i=e.fields,s=e.errors,l=e.getWorkingHours,o=e.dateDisabled,c=e.timeDisabled;return!0===this.state.formValidated?r.a.createElement(S.a,{to:"barberbooked"}):r.a.createElement("div",{className:"booking-app-wrapper"},r.a.createElement("div",{className:"booking-app-title"},r.a.createElement("h2",null,"Book your appointment")),r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("input",{type:"text",placeholder:"First Name",onChange:this.handleChange.bind(this,"name"),value:i.name||""}),r.a.createElement("span",{className:"error"},s.name)),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("input",{type:"text",placeholder:"Last Name",onChange:this.handleChange.bind(this,"surname"),value:i.surname||""})),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("input",{placeholder:"Email",onChange:this.handleChange.bind(this,"email"),value:i.email||""}),r.a.createElement("span",{className:"error"},s.email)),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("input",{pattern:"[0][0-9]{8}",placeholder:"Phone Number",onChange:this.handleChange.bind(this,"phone"),value:i.phone||""}),r.a.createElement("span",{className:"error"},s.phone)),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("select",{value:i.barber||"",onChange:this.onChange.bind(this,"barber")},r.a.createElement("option",{hidden:!0},"Select Barber"),t.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.firstName," ",e.lastName)}))),r.a.createElement("span",{className:"error"},s.barber)),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("select",{value:i.service||"",onChange:this.handleClick.bind(this,"service"),disabled:!0===this.state.serviceDisable?"disabled":null},r.a.createElement("option",{hidden:!0},"Select Service"),a.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))),r.a.createElement("span",{className:"error"},s.service)),r.a.createElement(k,{serviceId:this.state.price,errors:this.state.errors,callbackGetTimeValue:this.callbackGetTimeValue,callbackGetDateValue:this.callbackGetDateValue,getWorkingHours:l,datedisabled:o,timeDisabled:c}),r.a.createElement("div",{className:"input-wrapper price"},r.a.createElement("input",{value:n,disabled:!0})),r.a.createElement("input",{type:"submit",value:"Book appointment"})))}}]),a}(n.Component),j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section-booking"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h1",null,"Book your barber")),r.a.createElement("div",{className:"section-subtitle"},r.a.createElement("h3",null,"Great Hair Doesn\u2019t Happen By Chance. It Happens By Appointment! So, Don't Wait And Book Your Appointment Now!")),r.a.createElement("div",{className:"section-image"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{alt:"Barber banner",src:p.a}))),r.a.createElement("div",{className:"section-booking-app"},r.a.createElement(y,null))))}}]),a}(n.Component),O=a(46);var N=function(){return r.a.createElement(O.a,null,r.a.createElement(S.d,null,r.a.createElement(S.b,{path:"/",exact:!0,component:j}),r.a.createElement(S.b,{path:"/barberbooked",component:m})))};a(139),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/image.63f4e1b0.jpg"},70:function(e,t,a){e.exports=a(141)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.6c308c4a.chunk.js.map