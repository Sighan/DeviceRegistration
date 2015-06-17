/*globals app*/
(function () {
    'use strict';
    app.config(function (valdrProvider, valdrMessageProvider) {
        valdrProvider.addConstraints({
            'Login': {
                'email': {
                    'size': {
                        'min': 2,
                        'max': 10
                    },
                    'required': {
                        'message': 'E-mail is required.'
                    }
                },
                'password': {
                    'size': {
                        'min': 2,
                        'max': 20,
                        'message': 'Password must be between 2 and 20 characters.'
                    },
                    'required': {
                        'message': 'Password is required.'
                    }
                }
            }
        });
    });
}());