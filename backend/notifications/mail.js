import mailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from "path";


const getEmailData = (to, name, template) =>{
    let data = null;
    switch (template){
        case "hello" :
            data = {
                from: "MyShop",
                to,
                subject: `Hello ${name}`,
                text: "Is it really working?",
                template: 'index',
                attachments: [
                    {
                        filename: 'manager.jpg',
                        path: path.resolve('backend/notifications/images/manager.jpg'),
                        cid: 'first'
                    },
                    {
                        filename: 'logo.png',
                        path: path.resolve('backend/notifications/images/logo.png'),
                        cid: 'second'
                    },
                    {
                        filename: 'background.png',
                        path: path.resolve('backend/notifications/images/background.png'),
                        cid: 'third'
                    },
                    {
                        filename: 'facebook.png',
                        path: path.resolve('backend/notifications/images/facebook.png'),
                        cid: 'facebook'
                    },
                    {
                        filename: 'instagram.png',
                        path: path.resolve('backend/notifications/images/instagram.png'),
                        cid: 'inst'
                    },{
                        filename: 'linkedin.png',
                        path: path.resolve('backend/notifications/images/linkedin.png'),
                        cid: 'linkedin'
                    },{
                        filename: 'twitter.png',
                        path: path.resolve('backend/notifications/images/twitter.png'),
                        cid: 'twitter'
                    },

                ],
                context: {
                    var1: name,
                }
            }
            break;
    }
    return data;
}

export default function sendEmail (to, name, type) {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const handlebarOptions = {
        viewEngine: {
            extName: ".handlebars",
            partialsDir: path.resolve('backend/notifications/views/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('backend/notifications/views/'),
        extName: ".handlebars",
    };

    smtpTransport.use('compile', hbs(handlebarOptions));

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function (error) {
        if (error) {
            console.log(error)
        } else {
            console.log("email sent successfully")
        }
    })
}
