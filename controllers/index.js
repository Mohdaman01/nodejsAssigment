
module.exports.home_controller = function (req, res) {
    try {
        return res.render('form', {
            title: "Home"
        });
    } catch {
        console.log('Error in homeContoller', err);
        return;
    }
}

module.exports.form_controller = function (req, res) {
    try {
        const formBody = req.body.form;

        const key = req.body.form.slice(2, formBody.indexOf(':') - 1);

        const value = req.body.form.slice(formBody.indexOf(':') + 2, -2);

        return res.render('returnData', {
            data:{
                key,
                value
            },
            title: 'returned data'
        });
    } catch {
        console.log('Error in formContoller', err);
        return;
    }
}