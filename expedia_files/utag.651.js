//tealium universal tag - utag.651 ut4.0.201702280649, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){u=utag.o[loader].sender[id]={};u.ev={'view':1};u.qsp_delim="&";u.kvp_delim="=";u.map={"utagPageName":"pagename","dom.url":"url"};u.extend=[];u.send=function(a,b){if(u.ev[a]||typeof u.ev.all!="undefined"){u.data={"cpk":"GjS3lr54GN9NxxwqW2Ze","cak":"PiYTfAv5SK25C5kYBXyF"};var c,d,e,f;c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f]==="cpk"||e[f]==="cak"||e[f]==="base_url"){u.data[e[f]]=b[d];}else{u.data[e[f]]=b[d];c.push(e[f]+u.kvp_delim+encodeURIComponent(b[d]));}}}}
c.push("cpk"+u.kvp_delim+encodeURIComponent(u.data.cpk),"cak"+u.kvp_delim+encodeURIComponent(u.data.cak));u.data.base_url=u.data.base_url||"//rtd.tubemogul.com/stats/1/conv?";u.img=new Image();u.img.src=u.data.base_url+c.join(u.qsp_delim);}}
utag.o[loader].loader.LOAD(id);})('651','expedia.main');}catch(e){}