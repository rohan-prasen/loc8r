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
    res.render('Sign In', { title: 'Sign In' });
    content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
}
/* GET 'register' page */
module.exports.register = function(req, res){
    res.render('Register', { title: 'Register' });
    content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
}