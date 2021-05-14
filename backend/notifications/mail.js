import mailer from 'nodemailer'
//import {Hello} from "./helloTemplate.js";
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
                        filename: '29241521207598269.jpg',
                        path: path.resolve('backend/notifications/images/29241521207598269.jpg'),
                        cid: 'first'
                    },
                    {
                        filename: '51621521206431413.png',
                        path: path.resolve('backend/notifications/images/51621521206431413.png'),
                        cid: 'second'
                    },
                    {
                        filename: '93491522393929597.png',
                        path: path.resolve('backend/notifications/images/93491522393929597.png'),
                        cid: 'third'
                    },
                    {
                        filename: 'facebook-circle-white.png',
                        path: path.resolve('backend/notifications/images/facebook-circle-white.png'),
                        cid: 'facebook'
                    },
                    {
                        filename: 'instagram-circle-white.png',
                        path: path.resolve('backend/notifications/images/instagram-circle-white.png'),
                        cid: 'inst'
                    },{
                        filename: 'linkedin-circle-white.png',
                        path: path.resolve('backend/notifications/images/linkedin-circle-white.png'),
                        cid: 'linkedin'
                    },{
                        filename: 'twitter-circle-white.png',
                        path: path.resolve('backend/notifications/images/twitter-circle-white.png'),
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

    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error)
        } else {
            console.log("email sent successfully")
        }
    })
}
