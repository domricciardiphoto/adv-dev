function buildSearchData(form){
 var tmp="";

 for (i=0;i<form.elements.length;i++){
  if (form.elements[i].type=="radio" || form.elements[i].type=="checkbox"){
   if (form.elements[i].checked){
    tmp=doURLParm(tmp, form.elements[i].name, $.trim(form.elements[i].value));
   }
  }else{
   tmp=doURLParm(tmp, form.elements[i].name, $.trim(form.elements[i].value));
  }
 }

 return tmp;
}

function doURLParm(workURL, fieldName, fieldValue){
 if (workURL!=""){
  workURL+="&";
 }

 return workURL + fieldName + '=' + escape(fieldValue);
}

function isNumber(n){
 try{
 
  var str = n;
  str = str.replace('$','');
 
  if (!isNaN(parseFloat(str)) &&
      isFinite(str)){
   return true;
  }else{
   return false;
  }
 }catch(e){
  return false;
 }
}