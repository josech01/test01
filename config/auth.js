module.exports = {

    'facebookAuth' : {
        'clientID'      : '882410838586064', // your App ID
        'clientSecret'  : '0f9bd13e8b40ece239698e7a2930723c', // your App Secret
        'callbackURL'   : 'https://ac49e9bb.ngrok.io/auth/facebook/callback',
        // 'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields': ['id', 'name', 'displayName', 'username', 'photos', 'hometown', 'profileUrl', 'friends'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'rZBwP5fqSVyNlQiCqoGetdmUl',
        'consumerSecret'    : 'IyZ9aMyGppRgGGuMoreuk1OBviFxEXtKRIQd2LyR22G1on0XLg',
        // 'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
        'callbackURL'       : '/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '785239587801-ma2mb6vdedg7ujujj7e3s6nsc6ijka9j.apps.googleusercontent.com',
        'clientSecret'  : 'NlA6q4eo2v_iycICyCVR3QME',
        // 'callbackURL'   : 'http://localhost:3000/auth/google/callback'
        'callbackURL'   : 'https://ac49e9bb.ngrok.io/auth/google/callback'
    }

};