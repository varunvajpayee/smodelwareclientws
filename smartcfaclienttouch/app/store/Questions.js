/**
 * Created by varun on 11/9/2016.
 */
Ext.define('smartcfaclienttouch.store.Questions', {
    extend: 'Ext.data.Store',
    model: 'smartcfaclienttouch.model.Question',
    storeId: 'Questions',
    alias: 'store.Questions',


    config:{
       // model: 'smartcfaclienttouch.model.Question',
        root : {},

        proxy: {
            type: 'jsonp',
            url: smartcfaclienttouch.protocolHostPort+'/getQuestions',
            callbackName: 'myCallback'
            ,success: function(data) {
             callback();
                console.log(data);
             }
        }
    }

     //Uncomment to specify data inline
     //data :   [{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"\"[test]Credit risk  risk: (1) _ a type of market risk; (2) _a type of financial risk.\"","qA":"is; -is;","qB":"is; -is not;","qC":"Is not;-Is;","qD":"Is not;- Is not","questionId":null,"questionNum":"0","answerId":"CFA_B_5_SS_14_R_25_L_d_A_5","answerText":null},{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"[test]_is the risk of loss from failure in a company's systems and procedures","qA":"Model Risk","qB":"Operations risk","qC":"Regulatory risk","qD":"Settlement  risk","questionId":null,"questionNum":"1","answerId":"CFA_B_5_SS_14_R_25_L_d_A_7","answerText":null},{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"[test]_ is the risk of use of the wrong model or the improper use of the right model","qA":"Model Risk","qB":"Operations risk","qC":"Regulatory risk","qD":"Settlement  risk","questionId":null,"questionNum":"2","answerId":"CFA_B_5_SS_14_R_25_L_d_A_8","answerText":null},{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"\"[test]Commodity  price risk:  (1) _ a type of market risk; (2) _a type of financial risk.\"","qA":"is; -is;","qB":"is; -is not;","qC":"Is not;-Is;","qD":"Is not;- Is not","questionId":null,"questionNum":"3","answerId":"CFA_B_5_SS_14_R_25_L_d_A_3","answerText":null},{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"[test]_for  a financial  instrument  is the risk that the financial  instrument cannot be purchased or sold without a singnificant concession in price.","qA":"Interest rate risk ","qB":"Commodity price risk ","qC":"Credit risk ","qD":"Liquidity risk","questionId":null,"questionNum":"4","answerId":"CFA_B_5_SS_14_R_25_L_d_A_6","answerText":null},{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"\"[test]_is the  risk  that  jn  a  two-way  transfer  of  funds  one side could  pay  the  other while this other side does  not pay but instead declares bankruptcy\"","qA":"Model Risk","qB":"Operations risk","qC":"Regulatory risk","qD":"Settlement  risk","questionId":null,"questionNum":"5","answerId":"CFA_B_5_SS_14_R_25_L_d_A_9","answerText":null},{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"\"[test]Exchange rate risk:  (1) _ a type of market risk; (2) _a type of financial risk.\"","qA":"is; -is;","qB":"is; -is not;","qC":"Is not;-Is;","qD":"Is not;- Is not","questionId":null,"questionNum":"6","answerId":"CFA_B_5_SS_14_R_25_L_d_A_4","answerText":null},{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"[test]_is the risk that a contract will  not be legally enforceable.","qA":"Model Risk","qB":"Operations risk","qC":"Regulatory risk","qD":"Settlement  risk","questionId":null,"questionNum":"7","answerId":"CFA_B_5_SS_14_R_25_L_d_A_11","answerText":null},{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"[test]_is the  risk that  regulations  will  be  changed  to  be  more  onerous more restrictive and/or more costly","qA":"Model Risk","qB":"Operations risk","qC":"Regulatory risk","qD":"Settlement  risk","questionId":null,"questionNum":"8","answerId":"CFA_B_5_SS_14_R_25_L_d_A_10","answerText":null},{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"\"[test]Equity price  risk:  (1) _ a type of market risk; (2) _a type of financial risk.\"","qA":"is; -is;","qB":"is; -is not;","qC":"Is not;-Is;","qD":"Is not;- Is not","questionId":null,"questionNum":"9","answerId":"CFA_B_5_SS_14_R_25_L_d_A_2","answerText":null},{"losId":"CFA_B_5_SS_14_R_25_L_d","questionText":"\"[test]Interest rate risk:  (1) _ a type of market risk; (2) _a type of financial risk.\"","qA":"is; -is;","qB":"is; -is not;","qC":"Is not;-Is;","qD":"Is not;- Is not","questionId":null,"questionNum":"10","answerId":"CFA_B_5_SS_14_R_25_L_d_A_1","answerText":null}]
});