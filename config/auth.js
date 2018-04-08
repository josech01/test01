module.exports = {

    'facebookAuth' : {
        'clientID'      : '882410838586064', // your App ID
        'clientSecret'  : '0f9bd13e8b40ece239698e7a2930723c', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'rZBwP5fqSVyNlQiCqoGetdmUl',
        'consumerSecret'    : 'IyZ9aMyGppRgGGuMoreuk1OBviFxEXtKRIQd2LyR22G1on0XLg',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};