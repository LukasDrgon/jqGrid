(function(a){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jqdnr","./jqmodal"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var n=a.jgrid,w=a.fn.jqGrid,u=w.getGuiStyles,x=w.getGridRes;n.jqModal=n.jqModal||{};a.extend(!0,n.jqModal,{toTop:!0});a.extend(n,{showModal:function(a){a.w.show()},closeModal:function(a){a.w.hide().attr("aria-hidden","true");a.o&&a.o.remove()},hideModal:function(d,b){b=a.extend({jqm:!0,gb:"",removemodal:!1},b||{});var c=
b.gb&&"string"===typeof b.gb&&"#gbox_"===b.gb.substr(0,6)?a("#"+b.gb.substr(6))[0]:!1,g=a(d);if(b.onClose&&(c=c?b.onClose.call(c,d):b.onClose(d),"boolean"===typeof c&&!c))return;if(a.fn.jqm&&!0===b.jqm)g.attr("aria-hidden","true").jqmHide();else{if(""!==b.gb)try{a(">.jqgrid-overlay",b.gb).first().hide()}catch(l){}g.hide().attr("aria-hidden","true")}b.removemodal&&g.remove()},createModal:function(d,b,c,g,l,k,e){var h=n.jqID,f=this.p;c=a.extend(!0,{resizingRightBottomIcon:w.getIconRes.call(this,"form.resizableLtr")},
n.jqModal||{},null!=f?f.jqModal||{}:{},c);var f=document.createElement("div"),m="#"+h(d.themodal),q="rtl"===a(c.gbox).attr("dir")?!0:!1,r=d.resizeAlso?"#"+h(d.resizeAlso):!1;e=a.extend({},e||{});f.className=u.call(this,"dialog.window","ui-jqdialog");f.id=d.themodal;f.dir=q?"rtl":"ltr";var p=document.createElement("div");p.className=u.call(this,"dialog.document");a(p).attr("role","document");var t=document.createElement("div");t.className=u.call(this,"dialog.subdocument");p.appendChild(t);f.appendChild(p);
p=document.createElement("div");p.className=u.call(this,"dialog.header","ui-jqdialog-titlebar "+(q?"ui-jqdialog-titlebar-rtl":"ui-jqdialog-titlebar-ltr"));p.id=d.modalhead;a(p).append("<span class='ui-jqdialog-title'>"+c.caption+"</span>");var v=u.call(this,"states.hover"),y=a("<a aria-label='Close' class='"+u.call(this,"dialog.closeButton","ui-jqdialog-titlebar-close")+"'></a>").hover(function(){y.addClass(v)},function(){y.removeClass(v)}).append("<span class='"+w.getIconRes.call(this,"form.close")+
"'></span>");a(p).append(y);q=document.createElement("div");a(q).addClass(u.call(this,"dialog.content","ui-jqdialog-content")).attr("id",d.modalcontent);a(q).append(b);t.appendChild(q);a(t).prepend(p);!0===k?a("body").append(f):"string"===typeof k?a(k).append(f):a(f).insertBefore(g);a(f).css(e);void 0===c.jqModal&&(c.jqModal=!0);b={};if(a.fn.jqm&&!0===c.jqModal)0===c.left&&0===c.top&&c.overlay&&(c=a(l).offset(),c.left+=4,c.top+=4),b.top=c.top+"px",b.left=c.left;else if(0!==c.left||0!==c.top)b.left=
c.left,b.top=c.top+"px";a("a.ui-jqdialog-titlebar-close",p).click(function(){var b=a(m).data("onClose")||c.onClose,d=a(m).data("gbox")||c.gbox;n.hideModal(m,{gb:d,jqm:c.jqModal,onClose:b,removemodal:c.removemodal||!1});return!1});0!==c.width&&c.width||(c.width=300);0!==c.height&&c.height||(c.height=200);c.zIndex||((g=a(g).parents("*[role=dialog]").first().css("z-index"))?(c.zIndex=parseInt(g,10)+2,c.toTop=!0):c.zIndex=950);b.left&&(b.left+="px");a(f).css(a.extend({width:isNaN(c.width)?"auto":c.width+
"px",height:isNaN(c.height)?"auto":c.height+"px",zIndex:c.zIndex},b)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":d.modalhead,"aria-hidden":"true"});void 0===c.drag&&(c.drag=!0);void 0===c.resize&&(c.resize=!0);if(c.drag)if(a.fn.jqDrag)a(p).css("cursor","move"),a(f).jqDrag(p);else try{a(f).draggable({handle:a("#"+h(p.id))})}catch(z){}if(c.resize)if(a.fn.jqResize)a(q).append("<div class='jqResize ui-resizable-handle ui-resizable-se "+c.resizingRightBottomIcon+"'></div>"),a(m).jqResize(".jqResize",
r);else try{a(f).resizable({handles:"se, sw",alsoResize:r})}catch(z){}!0===c.closeOnEscape&&a(f).keydown(function(b){27===b.which&&(b=a(m).data("onClose")||c.onClose,n.hideModal(m,{gb:c.gbox,jqm:c.jqModal,onClose:b,removemodal:c.removemodal||!1,formprop:!c.recreateForm||!1,form:c.form||""}))})},viewModal:function(d,b){b=a.extend(!0,{overlay:30,modal:!1,overlayClass:u.call(this,"overlay"),onShow:n.showModal,onHide:n.closeModal,gbox:"",jqm:!0,jqM:!0},n.jqModal||{},b||{});if(a.fn.jqm&&!0===b.jqm)b.jqM?
a(d).attr("aria-hidden","false").jqm(b).jqmShow():a(d).attr("aria-hidden","false").jqmShow();else{""!==b.gbox&&(a(">.jqgrid-overlay",b.gbox).first().show(),a(d).data("gbox",b.gbox));a(d).show().attr("aria-hidden","false");try{a(":input:visible",d)[0].focus()}catch(c){}}},info_dialog:function(d,b,c,g){var l=this,k=l.p,e=a.extend(!0,{width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1E3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]},
n.jqModal||{},null!=k?k.jqModal||{}:{},{caption:"<b>"+d+"</b>"},g||{}),h=e.jqModal;a.fn.jqm&&!h&&(h=!1);d="";var f=u.call(l,"states.hover");if(0<e.buttons.length)for(g=0;g<e.buttons.length;g++)void 0===e.buttons[g].id&&(e.buttons[g].id="info_button_"+g),d+=n.builderFmButon.call(l,e.buttons[g].id,e.buttons[g].text);g=isNaN(e.dataheight)?e.dataheight:e.dataheight+"px";var k="text-align:"+e.align+";",m=a("#info_dialog");b="<div id='info_id'>"+("<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+
g+";"+k+"'>"+b+"</div>");if(c||""!==d)b+="<hr class='"+u.call(l,"dialog.hr")+"' style='margin:1px'/><div style='text-align:"+e.buttonalign+";padding:.8em 0 .5em 0;background-image:none;border-width: 1px 0 0 0;'>"+(c?n.builderFmButon.call(l,"closedialog",c):"")+d+"</div>";b+="</div>";try{"false"===m.attr("aria-hidden")&&n.hideModal("#info_dialog",{jqm:h}),m.remove()}catch(q){}n.createModal.call(l,{themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",resizeAlso:"infocnt"},b,e,"",
"",!0);m=a("#info_dialog");d&&a.each(e.buttons,function(){a("#"+n.jqID(this.id),"#info_id").on("click",{click:this.onClick},function(b){a.isFunction(b.data.click)&&b.data.click.call(l,b,m);return!1})});a("#closedialog","#info_id").click(function(){n.hideModal("#info_dialog",{jqm:h,onClose:m.data("onClose")||e.onClose,gb:m.data("gbox")||e.gbox});return!1});a(".fm-button","#info_dialog").hover(function(){a(this).addClass(f)},function(){a(this).removeClass(f)});a.isFunction(e.beforeOpen)&&e.beforeOpen();
n.viewModal.call(l,"#info_dialog",{onHide:function(b){b.w.hide().remove();b.o&&b.o.remove()},modal:e.modal,jqm:h});a.isFunction(e.afterOpen)&&e.afterOpen();try{m.focus()}catch(q){}},bindEv:function(d,b){a.isFunction(b.dataInit)&&b.dataInit.call(this,d,b);b.dataEvents&&a.each(b.dataEvents,function(){if(void 0!==this.data)a(d).on(this.type,this.data,this.fn);else a(d).on(this.type,this.fn)})},createEl:function(d,b,c,g,l){function k(b,c,d){var e="dataInit dataEvents dataUrl buildSelect sopt searchhidden defaultValue attr custom_element custom_value selectFilled rowId column mode cm iCol".split(" ");
void 0!==d&&a.isArray(d)&&a.merge(e,d);a.each(c,function(c,d){-1===a.inArray(c,e)&&a(b).attr(c,d)});c.hasOwnProperty("id")||a(b).attr("id",n.randId())}var e="",h=this,f=h.p,m=n.info_dialog,q=x.call(a(h),"errors.errcap"),r=x.call(a(h),"edit"),p=r.msg,r=r.bClose;if(null==b)return"";switch(d){case "textarea":e=document.createElement("textarea");g?b.cols||a(e).css({width:"100%","box-sizing":"border-box"}):b.cols||(b.cols=19);b.rows||(b.rows=2);if("&nbsp;"===c||"&#160;"===c||1===c.length&&160===c.charCodeAt(0))c=
"";e.value=c;k(e,b);a(e).attr({role:"textbox"});break;case "checkbox":e=document.createElement("input");e.type="checkbox";b.value?(l=b.value.split(":"),c===l[0]&&(e.checked=!0,e.defaultChecked=!0),e.value=l[0],a(e).data("offval",l[1])):(l=String(c).toLowerCase(),0>l.search(/(false|f|0|no|n|off|undefined)/i)&&""!==l?(e.checked=!0,e.defaultChecked=!0,e.value=c):e.value="on",a(e).data("offval","off"));k(e,b,["value"]);a(e).attr({role:"checkbox","aria-checked":e.checked?"true":"false"});break;case "select":e=
document.createElement("select");g=[];d=null;!0===b.multiple?(m=!0,e.multiple="multiple",a(e).attr("aria-multiselectable","true"),g=c.split(","),g=a.map(g,function(b){return a.trim(b)})):(m=!1,g[0]=a.trim(c));void 0===b.size&&(b.size=m?3:1);try{d=b.rowId}catch(v){}f&&f.idPrefix&&(d=n.stripPref(f.idPrefix,d));void 0!==b.dataUrl?(f=b.postData||l.postData,g={elem:e,options:b,cm:b.cm,mode:b.mode,rowid:d,iCol:b.iCol,ovm:g},k(e,b,f?["postData"]:void 0),a.ajax(a.extend({url:a.isFunction(b.dataUrl)?b.dataUrl.call(h,
d,c,String(b.name),g):b.dataUrl,type:"GET",dataType:"html",data:a.isFunction(f)?f.call(h,d,c,String(b.name)):f,context:g,success:function(b,c,d){var e=this.ovm,g=this.elem,f=this.cm,k=this.iCol,l=a.extend({},this.options),m=this.rowid,p=this.mode;b=a.isFunction(l.buildSelect)?l.buildSelect.call(h,b,d,f,k):b;"string"===typeof b&&(b=a(a.trim(b)).html());b&&(a(g).append(b),setTimeout(function(){var b;a("option",g).each(function(c){0===c&&g.multiple&&(this.selected=!1);-1<a.inArray(a.trim(a(this).val()),
e)&&(b=this.selected=!0)});b||a("option",g).each(function(){-1<a.inArray(a.trim(a(this).text()),e)&&(this.selected=!0)});n.fullBoolFeedback.call(h,l.selectFilled,"jqGridSelectFilled",{elem:g,options:l,cm:f,rowid:m,mode:p,cmName:null!=f?f.name:l.name,iCol:k})},0))}},l||{}))):b.value&&(n.fillSelectOptions(e,b.value,void 0===b.separator?":":b.separator,void 0===b.delimiter?";":b.delimiter,m,c),k(e,b,["value"]),n.fullBoolFeedback.call(h,b.selectFilled,"jqGridSelectFilled",{elem:e,options:b,cm:b.cm,rowid:d,
mode:b.mode,cmName:null!=b.cm?b.cm.name:b.name,iCol:b.iCol}));break;case "text":case "password":case "button":l="button"===d?"button":"textbox";e=document.createElement("input");e.type=d;k(e,b);e.value=c;"button"!==d&&(g?b.size||a(e).css({width:"100%","box-sizing":"border-box"}):b.size||(b.size=20));a(e).attr("role",l);break;case "image":case "file":e=document.createElement("input");e.type=d;k(e,b);break;case "custom":e=document.createElement("span");try{if(a.isFunction(b.custom_element)){var t=b.custom_element.call(h,
c,b);if(t instanceof jQuery||n.isHTMLElement(t)||"string"===typeof t)t=a(t).addClass("customelement").attr({id:b.id,name:b.name}),a(e).empty().append(t);else throw"editoptions.custom_element returns value of a wrong type";}else throw"editoptions.custom_element is not a function";}catch(v){"e1"===v&&m.call(h,q,"function 'custom_element' "+p.nodefined,r),"e2"===v?m.call(h,q,"function 'custom_element' "+p.novalue,r):m.call(h,q,"string"===typeof v?v:v.message,r)}}return e},checkDate:function(a,b){var c=
{},d;a=a.toLowerCase();d=-1!==a.indexOf("/")?"/":-1!==a.indexOf("-")?"-":-1!==a.indexOf(".")?".":"/";a=a.split(d);b=b.split(d);if(3!==b.length)return!1;var l=-1,k,e=d=-1,h;for(h=0;h<a.length;h++)k=isNaN(b[h])?0:parseInt(b[h],10),c[a[h]]=k,k=a[h],-1!==k.indexOf("y")&&(l=h),-1!==k.indexOf("m")&&(e=h),-1!==k.indexOf("d")&&(d=h);k="y"===a[l]||"yyyy"===a[l]?4:"yy"===a[l]?2:-1;var f;h=[0,31,29,31,30,31,30,31,31,30,31,30,31];if(-1===l)return!1;f=c[a[l]].toString();2===k&&1===f.length&&(k=1);if(f.length!==
k||0===c[a[l]]&&"00"!==b[l]||-1===e)return!1;f=c[a[e]].toString();if(1>f.length||1>c[a[e]]||12<c[a[e]]||-1===d)return!1;f=c[a[d]].toString();!(k=1>f.length||1>c[a[d]]||31<c[a[d]])&&(k=2===c[a[e]])&&(l=c[a[l]],k=c[a[d]]>(0!==l%4||0===l%100&&0!==l%400?28:29));return k||c[a[d]]>h[c[a[e]]]?!1:!0},isEmpty:function(a){return a.match(/^\s+$/)||""===a?!0:!1},checkTime:function(a){var b=/^(\d{1,2}):(\d{2})([apAP][Mm])?$/;if(!n.isEmpty(a))if(a=a.match(b)){if(a[3]){if(1>a[1]||12<a[1])return!1}else if(23<a[1])return!1;
if(59<a[2])return!1}else return!1;return!0},checkValues:function(d,b,c,g,l){var k,e,h=this.p;e=h.colModel;var f=n.isEmpty,m=x.call(a(this),"edit.msg"),q=x.call(a(this),"formatter.date.masks");if(void 0===c){"string"===typeof b&&(b=h.iColByName[b]);if(void 0===b||0>b)return[!0,"",""];g=e[b];c=g.editrules;null!=g.formoptions&&(k=g.formoptions.label)}else k=void 0===g?"_":g,g=e[b];if(c){k||(k=null!=h.colNames?h.colNames[b]:g.label);if(!0===c.required&&f(d))return[!1,k+": "+m.required,""];h=!1===c.required?
!1:!0;if(!0===c.number&&(!1!==h||!f(d))&&isNaN(d))return[!1,k+": "+m.number,""];if(void 0!==c.minValue&&!isNaN(c.minValue)&&parseFloat(d)<parseFloat(c.minValue))return[!1,k+": "+m.minValue+" "+c.minValue,""];if(void 0!==c.maxValue&&!isNaN(c.maxValue)&&parseFloat(d)>parseFloat(c.maxValue))return[!1,k+": "+m.maxValue+" "+c.maxValue,""];var r;if(!(!0!==c.email||!1===h&&f(d)||(r=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
r.test(d))))return[!1,k+": "+m.email,""];if(!(!0!==c.integer||!1===h&&f(d)||!isNaN(d)&&0===d%1&&-1===d.indexOf(".")))return[!1,k+": "+m.integer,""];if(!(!0!==c.date||!1===h&&f(d)||(g.formatoptions&&g.formatoptions.newformat?(e=g.formatoptions.newformat,q.hasOwnProperty(e)&&(e=q[e])):e=e[b].datefmt||"Y-m-d",n.checkDate(e,d))))return[!1,k+": "+m.date+" - "+e,""];if(!0===c.time&&!(!1===h&&f(d)||n.checkTime(d)))return[!1,k+": "+m.date+" - hh:mm (am/pm)",""];if(!(!0!==c.url||!1===h&&f(d)||(r=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,
r.test(d))))return[!1,k+": "+m.url,""];if(!0===c.custom){if(!1!==h||!f(d))return a.isFunction(c.custom_func)?(d=c.custom_func.call(this,d,k,b),a.isArray(d)?d:[!1,m.customarray,""]):[!1,m.customfcheck,""]}else if(a.isFunction(c.custom)&&(!1!==h||!f(d)))return d=c.custom.call(this,l),a.isArray(d)?d:[!1,m.customarray,""]}return[!0,"",""]}})});
//# sourceMappingURL=grid.common.map
