Ext.define('smartcfaclienttouch.view.LoginPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginpanel',

    init: function(view)
    {
        console.log('Table/Desktop::'+(Ext.os.is.Tablet || Ext.os.is.Desktop));
        console.log('Phone::'+Ext.os.is.Phone);

        var parts = document.cookie.split('; '),
            len = parts.length,
            item, i, ret;

        for (i = 0; i < len; ++i) {
            item = parts[i].split('=');
            console.log('cookie:'+item);

           var loginParam =  this.findGetParameter('login');

            if (item[0] === "login"){
                if(loginParam){
                    /*if(loginParam=='USER_LOGGED_OUT'){

                        window.top.location.href = "http://brightanalyst.com/login";
                    }*/

                    item[1] = loginParam;
                }


               console.log('smartcfaclienttouch.userlogedIn::YES');
               if(Ext.os.is.Phone)
               {
                   Ext.Viewport.setActiveItem('mainviewPhone');
               }
               else
               {
                   Ext.Viewport.setActiveItem('mainview');
               }
            }
            else if(loginParam){
                document.cookie =  document.cookie+'login='+loginParam+'; expires=Thu, 01 Jan 2070 00:00:00 UTC; path=/;';
                console.log('smartcfaclienttouch.userlogedIn::YES');
                if(Ext.os.is.Phone)
                {
                    Ext.Viewport.setActiveItem('mainviewPhone');
                }
                else
                {
                    Ext.Viewport.setActiveItem('mainview');
                }
            }
            else
            {
               console.log('smartcfaclienttouch.userlogedIn:: NOT');
            }
        }


    },

    findGetParameter: function(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
    },

    onSignIn: function(button, e, eOpts)
    {
        var view = this.getView(),
            formWindow = button.up('formpanel'),
            values = formWindow.getValues();

        // Success
        var successCallback = function(resp, ops)
        {
            //window.location.replace(location.protocol+'//'+location.hostname);
            formWindow.destroy();
            console.log('Login successful', resp);
            if(Ext.os.is.Phone)
            {
                Ext.Viewport.setActiveItem('mainviewPhone');
            }
            else
            {
                Ext.Viewport.setActiveItem('mainview');
            }

        };
        // Failure
        var failureCallback = function(resp, ops)
        {
            Ext.Msg.alert('User not found','Please register!' , Ext.emptyFn);
            // Show login failure error
            console.log('Login Failure', resp);

        };

        Ext.Ajax.request({
            //url: "http://localhost:8888/saveUser", url: location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+'/saveUser',
            url: smartcfaclienttouch.protocolHostPort+'/login',
            method:'POST',
            params: values,
            success: successCallback,
            failure: failureCallback
        });
    },


    onForgotPassword: function(button, e, eOpts) {
        Ext.Viewport.add({
            xtype: 'forgotpassword'
        });
    },

    onCreateAccount: function(button, e, eOpts) {

        Ext.Viewport.add({
            xtype: 'createuseraccount'
        });
    },
    onGoogleLogInClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = Ext.ComponentQuery.query('#loginFromPanel')[0],
            values = form.getValues();

        // Success
        var successCallback1 = function(resp, ops)
        {
            Ext.Msg.alert('Registration done!',' Your GMail address is your username.', Ext.emptyFn);
            console.log('Login URL:'+resp.responseText);
            window.location.replace(resp.responseText);

        };
        // Failure
        var failureCallback1 = function(resp, ops)
        {
            // Show login failure error
            console.log('Error'+resp);
            Ext.Msg.alert('Registration Failure','Registration Failure', Ext.emptyFn);

        };

        Ext.Ajax.request({
            //url: "http://localhost:8888/getGoogleLoginURL", url: location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+'/getGoogleLoginURL',
            url: smartcfaclienttouch.protocolHostPort+'/getGoogleLoginURL',
            //callbackName: 'myCallback',
            params: values,
            success: successCallback1,
            failure: failureCallback1
        });
    }

});