/*
/!**
 * <div class="tag-ovveride"></div>
 *!/
Ext.define('smartcfaclienttouch.service.SimpleRequest',(function(){
  //  Ext.Ajax.setTimeout(60000);

    ['Ext.data.Connection','Ext.data.proxy.Ajax'].forEach(function (cls) {
        Ext.apply(eval(cls).prototype.config,{
            useDefaultXhrHeader:false,
            withCredentials:true
        });
    });
    Ext.Ajax && (Ext.Ajax._withCredential=true);
    Ext.Ajax && (Ext.Ajax._useDefaultXhrHeader=true);

    return {
        override:'Ext.data.request.Ajax',
        withCredentials:true,
        useDefaultXhrHeader:false,

        setupHeaders:function (xhr,options,data,params) {
            if(!options.headers){
                options.headers={};
            }

            if(!options.headers['Content-Type']){
                options.headers['Content-Type']="text/plain";
            }
            var headers= this.callParent([xhr,options,data,params]);
            return headers;
        }
    };
})());*/
Ext.define('smartcfaclienttouch.service.SimpleRequest',{});