/**
 * Created by varun on 12/26/2016.
 */
Ext.define('smartcfaclienttouch.controller.authentication.RegisterFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registerform',

    onCancelClick: function(button, e, eOpts) {
           var formWindow = button.up('#CreateUserAccount');
            formWindow.destroy();
            },

    onRegisterButtonClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = button.up('formpanel'),
            formWindow = button.up('#CreateUserAccount'),
            values = form.getValues();


        // Success
        var successCallback = function(resp, ops)
        {
            Ext.Msg.alert('Registration Done','Registration successful', Ext.emptyFn);
            //window.location.replace(location.protocol+'//'+location.hostname);
            formWindow.destroy();
            console.log('Registration successful');
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
            Ext.Msg.alert('System Error','Error during user registration. Please try on another platform(web or app)', Ext.emptyFn);
            console.log('Error during user registration', resp);

        };

        if(values.fullName && values.userName && values.email && values.password && values.isTermAccepted) {
            Ext.Ajax.request({
                url: smartcfaclienttouch.protocolHostPort + '/saveUser',
                method:'POST',
                params: values,
                success: successCallback,
                failure: failureCallback
            });
        }
        else {
            if( !values.isTermAccepted )  {
                Ext.Msg.alert('System Error','Please accept terms and conditions', Ext.emptyFn);
            }
            else {
                Ext.Msg.alert('System Error','Please fill up all the details in the form', Ext.emptyFn);
            }
        }
    },

    onGoogleRegisterButtonClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = button.up('formpanel'),
            formWindow = button.up('#CreateUserAccount'),
            values = form.getValues();

        // Success
        var successCallback1 = function(resp, ops)
        {
            Ext.Msg.alert('Registration done!',' Your GMail address is your username.', Ext.emptyFn);
            console.log('Login URL:'+resp.responseText);
            window.location.replace(resp.responseText);
            //formWindow.destroy();

        };
        // Failure
        var failureCallback1 = function(resp, ops)
        {
            // Show login failure error
            console.log('Error'+resp);
            Ext.Msg.alert('Registration Failure','Registration Failure', Ext.emptyFn);

        };

        if( !values.isTermAccepted )  {
            Ext.Msg.alert('System Error','Please accept terms and conditions', Ext.emptyFn);
        }
        else {
            Ext.Ajax.request({
                url: smartcfaclienttouch.protocolHostPort + '/getGoogleLoginURL',
                //callbackName: 'myCallback',
                params: values,
                success: successCallback1,
                failure: failureCallback1
            })
        }
    },

    onForgotPasswordButtonClick: function(button, e, eOpts) {
        var view = this.getView(),
            formWindow = button.up('#ForgotPassword'),
            values = formWindow.getValues();

        // Success
        var successCallback = function(resp, ops)
        {
            Ext.Msg.alert('Message','Password Reset!' , Ext.emptyFn);
            //window.location.replace(location.protocol+'//'+location.hostname);
            formWindow.destroy();
            console.log('Password reset successful', resp);
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
            console.log('Registration Failure', resp);
        };

        if(values.password && values.rePassword && values.password == values.rePassword )
        {
            Ext.Ajax.request({
                url: smartcfaclienttouch.protocolHostPort+'/passwordReset',
                method:'POST',
                params: values,
                success: successCallback,
                failure: failureCallback
            });
        }
        else{
            Ext.Msg.alert('Passsowrd Reset Failure','Enter correct values for password and Re-Password', Ext.emptyFn);
            console.log('Password reset Not successful:Enter correct values for password and Re-Password');
        }
    },

});
