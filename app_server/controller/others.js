/* GET 'about us'  page */
module.exports.about = function(req, res)
{
    res.render('generic-text', {
        title: 'About Loc8r',
        content: 'Loc8r was created to help people find places to sit down and get a bit of work done.'
    });
};

/* GET 'signin' page */
module.exports.signin = function(req, res){
    res.render('signin', { title: 'Sign In' });
}

/* GET 'register' page */
module.exports.register = function(req, res){
    res.render('register', { title: 'Register' });
}