;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="66cb233f103e1c88267ebda767af100a";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["7wpCoGRrxCfo"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["7wpCoGRrxCfo"].options={"account":{"accountId":"Kcb5P0QlbizC","service":"googleanalytics","userId":"104526274636536320174"},"id":"UA-28259415-1","social":true};;CloudflareApps.installs["7wpCoGRrxCfo"].URLPatterns=["^blog.designova.net/?.*$","^designova.net/?.*$","^www.designova.net/?.*$"];;CloudflareApps.installs["FeaVsbddbLXZ"]={appId:"Y7XQHZ2XJNLN",scope:{}};;CloudflareApps.installs["FeaVsbddbLXZ"].options={"css":""};;CloudflareApps.installs["FeaVsbddbLXZ"].URLPatterns=["^designova.net/?.*$","^www.designova.net/?.*$"];;CloudflareApps.installs["Vs19LbPRdE20"]={appId:"-gXRR7q4QzkP",scope:{}};;CloudflareApps.installs["Vs19LbPRdE20"].options={"action":{"label":"Try FolioFusion for Free","show":true,"url":"https://www.foliofusion.com"},"delay":5,"position":"right","renew":"24hours","text":{"html":"\u003cp\u003eFOLIOFUSION - Our Drag \u0026amp; Drop Website Builder. Coupon: DESIGNOVA\u003c/p\u003e","markdown":"FOLIOFUSION - Our Drag \u0026 Drop Website Builder. Coupon: DESIGNOVA"},"title":"50% OFF!"};;CloudflareApps.installs["Vs19LbPRdE20"].URLPatterns=["^blog.designova.net/?.*$"];;CloudflareApps.installs["cqZzOVoIOKEw"]={appId:"nt4L5NPJq1za",scope:{}};;CloudflareApps.installs["cqZzOVoIOKEw"].options={"blocks":[]};;CloudflareApps.installs["5YJnOQM1ISlP"]={appId:"ZCDIXCYkgZ6P",scope:{}};;CloudflareApps.installs["5YJnOQM1ISlP"].options={"behavior":{"automaticallyHide":false,"showCloseButton":true},"cta":{"label":"Get 50% OFF!","newWindow":true,"show":true,"url":"https://www.foliofusion.com"},"message":"We have just launched FolioFusion - New Drag \u0026 Drop Website Builder with Our Beautiful Themes \u0026 Unlimited Web Hosting.  Use Coupon: DESIGNOVA","theme":{"backgroundColor":"#0000ff","buttonBackgroundColor":"#ffffff","buttonTextColor":"#0099ff","buttonTextColorStrategy":"auto","style":"prominent","textColor":"#ffffff"}};;CloudflareApps.installs["5YJnOQM1ISlP"].URLPatterns=["^blog.designova.net/?.*$"];;if(CloudflareApps.matchPage(CloudflareApps.installs['7wpCoGRrxCfo'].URLPatterns)){(function(){var options=CloudflareApps.installs['7wpCoGRrxCfo'].options
var id=(options.id||'').trim()
if(!id)return
function resolveParameter(uri,parameter){if(uri){var parameters=uri.split('#')[0].match(/[^?=&]+=([^&]*)?/g)
for(var i=0,chunk;chunk=parameters[i];++i){if(chunk.indexOf(parameter)===0){return unescape(chunk.split('=')[1])}}}}
window.dataLayer=window.dataLayer||[]
function gtag(){window.dataLayer.push(arguments)}
gtag('js',new Date())
gtag('config',id)
var vendorScript=document.createElement('script')
vendorScript.src='https://www.googletagmanager.com/gtag/js?id='+id
document.head.appendChild(vendorScript)
if(options.social){window.addEventListener('load',function googleAnalyticsSocialTracking(){var FB=window.FB
var twttr=window.twttr
if('FB'in window&&'Event'in FB&&'subscribe'in window.FB.Event){FB.Event.subscribe('edge.create',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'like',content_id:targetUrl})})
FB.Event.subscribe('edge.remove',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'unlike',content_id:targetUrl})})
FB.Event.subscribe('message.send',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'send',content_id:targetUrl})})}
if('twttr'in window&&'events'in twttr&&'bind'in twttr.events){twttr.events.bind('tweet',function(event){if(event){var targetUrl
if(event.target&&event.target.nodeName==='IFRAME'){targetUrl=resolveParameter(event.target.src,'url')}
gtag('event','share',{method:'twitter',event_action:'tweet',content_id:targetUrl})}})}},false)}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['FeaVsbddbLXZ'].URLPatterns)){(function(){var options=CloudflareApps.installs['FeaVsbddbLXZ'].options
var style=document.createElement('style')
document.head.appendChild(style)
function updateStyle(){style.innerHTML=options.css}
updateStyle()
window.CloudflareApps.installs['FeaVsbddbLXZ'].scope={setOptions:function(nextOptions){options=nextOptions
updateStyle()}}})()};if(CloudflareApps.matchPage(CloudflareApps.installs['cqZzOVoIOKEw'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['cqZzOVoIOKEw'].options
var elements={}
var prevElements={}
function updateElements(){options.blocks.forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.foundInBlocks=true
element.innerHTML=block.code
var scripts=element.querySelectorAll('script')
if(scripts){scripts.forEach(function(script){var newScript=document.createElement('script')
for(var key=script.attributes.length;key--;){var attr=script.attributes[key]
if(attr.specified){newScript.setAttribute(attr.name,attr.value)}}
newScript.innerHTML=script.innerHTML
element.replaceChild(newScript,script)})}})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElements)}else{updateElements()}
window.CloudflareApps.installs['cqZzOVoIOKEw'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,QGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMCk7CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIHsKICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOwogIGNvbG9yOiAjNDQ0OwogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1mbG93OiBjb2x1bW47CiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7CiAgZm9udC1zaXplOiAxNHB4OwogIGZvbnQtd2VpZ2h0OiA0MDA7CiAgbWF4LXdpZHRoOiAxMDAlOwogIG1pbi1oZWlnaHQ6IDcwcHg7CiAgcGFkZGluZzogMjBweCAxNXB4OwogIHBvc2l0aW9uOiBmaXhlZDsKICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5OwogIHRyYW5zaXRpb246IGJvdHRvbSAuNHMgZWFzZS1pbi1vdXQ7CiAgdmlzaWJpbGl0eTogaGlkZGVuOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdW2RhdGEtdmlzaWJpbGl0eT0idmlzaWJsZSJdIHsKICB2aXNpYmlsaXR5OiB2aXNpYmxlOwp9CgpAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsKICBjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIHsKICAgIGJvdHRvbTogMjBweDsKICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7CiAgICBib3JkZXItcmFkaXVzOiAzcHg7CiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsKICAgIHdpZHRoOiAzMzBweDsKICB9CgogIGNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl1bZGF0YS1wb3NpdGlvbj0ibGVmdCJdIHsKICAgIGxlZnQ6IDIwcHg7CiAgfQoKICBjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdW2RhdGEtcG9zaXRpb249InJpZ2h0Il0gewogICAgcmlnaHQ6IDIwcHg7CiAgfQoKICBjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIGZsYXNoY2FyZC1jb250ZW50IHsKICAgIGxpbmUtaGVpZ2h0OiAxLjU7CiAgfQp9CgpAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsKICBjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIHsKICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjOwogICAgYm90dG9tOiAwOwogICAgbGVmdDogMDsKICAgIHJpZ2h0OiAwOwogIH0KCiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJmbGFzaGNhcmQiXSBmbGFzaGNhcmQtY29udGVudCB7CiAgICBsaW5lLWhlaWdodDogMS43ODU7CiAgfQp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImZsYXNoY2FyZCJdIGZsYXNoY2FyZC1oZWFkZXIgewogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgZGlzcGxheTogZmxleDsKICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgZmxleDogMSAxIGF1dG87Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gZmxhc2hjYXJkLXRpdGxlIHsKICBmb250LXNpemU6IDE2cHg7CiAgZm9udC13ZWlnaHQ6IDcwMDsKICBvdmVyZmxvdzogaGlkZGVuOwogIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgZmxleDogMSAxIGF1dG87Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gZmxhc2hjYXJkLWNsb3NlIHsKICBtYXJnaW4tbGVmdDogMWVtOwogIGNvbG9yOiBpbmhlcml0OwogIGN1cnNvcjogcG9pbnRlcjsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgZm9udC1zaXplOiAxZW07CiAgZmxleDogMCAwIGF1dG87Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gZmxhc2hjYXJkLWNvbnRlbnQgewogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1mbG93OiBjb2x1bW47CiAgZmxleDogMSAxIGF1dG87Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gZmxhc2hjYXJkLWZvb3RlciB7CiAgbWFyZ2luLXRvcDogMC41ZW07CiAgZGlzcGxheTogZmxleDsKICBmbGV4LWZsb3c6IGNvbHVtbjsKICBmbGV4OiAwIDAgYXV0bzsKICB0ZXh0LWFsaWduOiBjZW50ZXI7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gZmxhc2hjYXJkLWZvb3RlciAuZmxhc2hjYXJkLWFjdGlvbiB7CiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50OwogIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50OwogIGJvcmRlcjogMXB4IHNvbGlkICMwMDczY2UgIWltcG9ydGFudDsKICBib3gtc2hhZG93OiBpbmhlcml0ICFpbXBvcnRhbnQ7CiAgY29sb3I6ICMwMDczY2UgIWltcG9ydGFudDsKICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudAogIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50CiAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudAogIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDsKICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50OwogIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OwogIHRleHQtc2hhZG93OiBpbmhlcml0ICFpbXBvcnRhbnQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gLmZsYXNoY2FyZC1hY3Rpb25baHJlZj0iIl0gewogIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gZmxhc2hjYXJkLW1lc3NhZ2UgewogIGRpc3BsYXk6IGJsb2NrOwogIGxpbmUtaGVpZ2h0OiAxLjQ7CiAgbWFyZ2luLXRvcDogMTBweDsKICBvdmVyZmxvdzogaGlkZGVuOwogIHBhZGRpbmctcmlnaHQ6IDEwcHg7CiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iZmxhc2hjYXJkIl0gZmxhc2hjYXJkLW1lc3NhZ2UgcDpmaXJzdC1jaGlsZCB7CiAgbWFyZ2luLXRvcDogMDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJmbGFzaGNhcmQiXSBmbGFzaGNhcmQtbWVzc2FnZSBwOmxhc3QtY2hpbGQgewogIG1hcmdpbi1ib3R0b206IDA7Cn0K';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/Tostt35DUgbkggoVqBk5ypPnI9c.js';document.head.appendChild(script);})();