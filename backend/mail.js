const mailer = require("nodemailer");

const getEmailData = (to, name, template) =>{
    let data = null;
    switch (template){
        case "hello" :
            data = {
                from: "Vitali <vitali.trick2001@gmail.com>",
                to,
                subject: `Hello ${name}`,
                html: "<b>Hello world?</b>"
            }
            break;
        default:
            data;
    }
    return data;
}

const sendEmail = (to, name, type) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth:{
            user: "vitalik.trick2001@gmail.com",
            pass: "17052001"
        }
    })
    const mail = getEmailData(to, name, type)
    smtpTransport.sendMail(mail, function (error, response){
        if(error){
            console.log(error)
        } else{
            console.log("email sent successfully")
        }
        smtpTransport.close();
    })
}
module.exports = {sendEmail}