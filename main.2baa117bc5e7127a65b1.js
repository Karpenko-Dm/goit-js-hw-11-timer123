(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,r){},QfWi:function(e,t,r){"use strict";r.r(t);r("L1EO"),r("VA1H")},VA1H:function(e,t){new class{constructor({targetDate:e}){this.targetDate=e,this.refs={days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]'),timerOver:document.querySelector('[data-value="over"]')}}dateTimer(){setInterval(()=>{let e=this.targetDate.getTime()-Date.now();if(e>0){const t=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),s=Math.floor(e%36e5/6e4),a=Math.floor(e%6e4/1e3);this.updateTimer(this.refs.secs,a),this.updateTimer(this.refs.mins,s),this.updateTimer(this.refs.hours,r),this.updateTimer(this.refs.days,t)}else this.refs.timerOver.textContent="Timer is over"},1e3)}updateTimer(e,t){e.textContent=t<=9?"0"+t:t}}({selector:"#timer-1",targetDate:new Date("may 28, 2022")}).dateTimer()}},[["QfWi",1]]]);
//# sourceMappingURL=main.2baa117bc5e7127a65b1.js.map