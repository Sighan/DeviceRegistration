/*globals app*/
(function () {
    'use strict';
    app.config(function (valdrProvider, valdrMessageProvider) {
        valdrProvider.addConstraints({
            'Login': {
                'email': {
                    'required': {
                        'message': 'E-mail is required.'
                    }
                },
                'password': {
                    'required': {
                        'message': 'Password is required.'
                    }
                }
            }
        });
    });
}());