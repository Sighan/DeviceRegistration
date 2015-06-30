/*globals app*/
(function () {
    'use strict';
    app.config(function (valdrProvider, valdrMessageProvider) {
        valdrProvider.addConstraints({
            'Login': {
                'email': {
                    'required': {
                        'message': 'This field is required.'
                    },
                    'email': {
                        'message': 'Not a valid e-mail address.'
                    }
                },
                'password': {
                    'required': {
                        'message': 'This field is required.'
                    }
                }
            },
            'Devices': {
                'category': {
                    'required': {
                        'message': 'This field is required.'
                    }
                },
                'group': {
                    'required': {
                        'message': 'This field is required.'
                    }
                },
                'medium': {
                    'required': {
                        'message': 'This field is required.'
                    }
                },
                'labels': {

                },
                'designation': {
                    'required': {
                        'message': 'This field is required.'
                    }
                },
                'serial': {
                    'required': {
                        'message': 'This field is required.'
                    }
                },
                'comment': {
                    'size': {
                        'min': 0,
                        'max': 120,
                        'message': 'Comment must be between 2 and 120 characters.'
                    }
                },
                'interval': {
                    'required': {
                        'message': 'This field is required.'
                    }
                },
                'period': {
                    'required': {
                        'message': 'This field is required.'
                    }
                },
                'reminder': {
                    'required': {
                        'message': 'This field is required.'
                    }
                },
                'email': {
                    'required': {
                        'message': 'This field is required.'
                    },
                    'email': {
                        'message': 'Not a valid e-mail address.'
                    }
                }
            }
        });
    });
}());