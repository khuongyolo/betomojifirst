$(document).ready(function() {
		$('#fullpage').fullpage({
			anchors: ['home', 'moji', 'game','lvup','about'],
			menu: '#menu',
			// sectionsColor: ['#AACF52', '#4BBFC3', '#7BAABE', '#E5E5E5', '#E6D5E5']
			});
});

//add font 

  (function(d) {
    var config = {
      kitId: 'htl1nec',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


//moji
var video = document.getElementById("videodefault");
document.getElementById("videodefault").load();
// Get the button
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.src = "img/replay.png";
  } 
  else {
    video.pause();
  }
}


var audio = document.getElementById('audio');


function A(){
  audio.src="voice/SA.mp3";
}
function AW(){
  audio.src="voice/SAW.mp3";
}
function AA(){
  audio.src="voice/SAA.mp3";
}
function B(){
  audio.src="voice/SB.mp3";
}
function C(){
  audio.src="voice/SC.mp3";
}
function D(){
  audio.src="voice/SD.mp3";
}
function DD(){
  audio.src="voice/SDD.mp3";
}
function E(){
  audio.src="voice/SE.mp3";
}
function EE(){
  audio.src="voice/SEE.mp3";
}
function G(){
  audio.src="voice/SG.mp3";
}
function H(){
  audio.src="voice/SH.mp3";
}
function I(){
  audio.src="voice/SI.mp3";
}
function K(){
  audio.src="voice/SK.mp3";
}
function L(){
  audio.src="voice/SL.mp3";
}
function M(){
  audio.src="voice/SM.mp3";
}
function N(){
  audio.src="voice/SN.mp3";
}
function O(){
  audio.src="voice/SO.mp3";
}
function OO(){
  audio.src="voice/SOO.mp3";
}
function OW(){
  audio.src="voice/SOW.mp3";
}
function P(){
  audio.src="voice/SP.mp3";
}
function Q(){
  audio.src="voice/SQ.mp3";
}
function R(){
  audio.src="voice/SR.mp3";
}
function S(){
  audio.src="voice/SS.mp3";
}
function T(){
  audio.src="voice/ST.mp3";
}
function U(){
  audio.src="voice/SU.mp3";
}
function UW(){
  audio.src="voice/SUW.mp3";
}
function V(){
  audio.src="voice/SV.mp3";
}
function X(){
  audio.src="voice/SX.mp3";
}
function Y(){
  audio.src="voice/SY.mp3";
}




var videos = document.getElementById("videodefaults");

// Get the button
var btns = document.getElementById("myBtn");

function myFunctions() {
  if (videos.paused) {
    videos.play();
    btns.src = "img/replay.png";
  } 
  else {
    videos.pause();
  }
}

var audios = document.getElementById('audios');


function SA(){
  audios.src="voice/SA.mp3";
}
function SAW(){
  audios.src="voice/SAW.mp3";
}
function SAA(){
  audios.src="voice/SAA.mp3";
}
function SB(){
  audios.src="voice/SB.mp3";
}
function SC(){
  audios.src="voice/SC.mp3";
}
function SD(){
  audios.src="voice/SD.mp3";
}
function SDD(){
  audios.src="voice/SDD.mp3";
}
function SE(){
  audios.src="voice/SE.mp3";
}
function SEE(){
  audios.src="voice/SEE.mp3";
}
function SG(){
  audios.src="voice/SG.mp3";
}
function SH(){
  audios.src="voice/SH.mp3";
}
function SI(){
  audios.src="voice/SI.mp3";
}
function SK(){
  audios.src="voice/SK.mp3";
}
function SL(){
  audios.src="voice/SL.mp3";
}
function SM(){
  audios.src="voice/SM.mp3";
}
function SN(){
  audios.src="voice/SN.mp3";
}
function SO(){
  audios.src="voice/SO.mp3";
}
function SOO(){
  audios.src="voice/SOO.mp3";
}
function SOW(){
  audios.src="voice/SOW.mp3";
}
function SP(){
  audios.src="voice/SP.mp3";
}
function SQ(){
  audios.src="voice/SQ.mp3";
}
function SR(){
  audios.src="voice/SR.mp3";
}
function SS(){
  audios.src="voice/SS.mp3";
}
function ST(){
  audios.src="voice/ST.mp3";
}
function SU(){
  audios.src="voice/SU.mp3";
}
function SUW(){
  audios.src="voice/SUW.mp3";
}
function SV(){
  audios.src="voice/SV.mp3";
}
function SX(){
  audios.src="voice/SX.mp3";
}
function SY(){
  audios.src="voice/SY.mp3";
}

function feedBack(){
  alert("フィードバックしていただきありがとうございます。");
}