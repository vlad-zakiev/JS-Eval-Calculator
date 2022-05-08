function enter(num){
    document.form.tabloview.value = document.form.tabloview.value + num;
}
function cleaner(){
    document.form.tabloview.value = "";
    document.form.tabloview.placeholder = "";
}
function backspace(){
    let dlt = document.form.tabloview.value;
    document.form.tabloview.value = dlt.substring(0, dlt.length - 1)
}
function result(){
    let rslt = document.form.tabloview.value;
    if(rslt){
        cleaner()
        document.form.tabloview.placeholder = eval(rslt);
    }
}
