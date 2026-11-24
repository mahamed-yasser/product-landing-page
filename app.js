(function(){
var $=function(i){return document.getElementById(i)};
function kelvin(h){ // 6500K at noon, down to 2700K at 22:00 and 3200K at 06:00
  var d=Math.abs(h-13); return Math.round(Math.max(2700,6500-d*(3800/9)));}
function upd(){var h=+$('time').value;$('tv').textContent=(h<10?'0':'')+h+':00';var k=kelvin(h);
  $('kelvin').textContent='Colour temperature: '+k+'K';
  var w=(6500-k)/3800;$('glow').style.background='rgb(255,'+Math.round(250-w*60)+','+Math.round(240-w*140)+')';}
$('time').addEventListener('input',upd);upd();
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
$('f').addEventListener('submit',function(e){e.preventDefault();
  var n=$('name').value.trim(),m=$('email').value.trim(),q=$('qty').value,er=$('err'),ok=$('ok');
  ok.hidden=true;
  if(n.length<2){er.textContent='Please enter your name.';er.hidden=false;$('name').focus();return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)){er.textContent='Please enter a valid email address.';er.hidden=false;$('email').focus();return}
  er.hidden=true;ok.textContent='Thanks, '+n+'. This is a demo: your '+(q==='2'?'pair ($99)':'lamp ($59)')+' reservation was not sent or saved.';ok.hidden=false;});
})();
