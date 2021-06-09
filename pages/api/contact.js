export default async function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
          type: 'OAuth2',
          user: 'shashank8kumar@gmail.com',
          clientId: '332811650288-26p5aq04m2dgt3encpjk0a1tvbfjtm3g.apps.googleusercontent.com',
          clientSecret: 'yEePfuQBLbCYjoXmzR5-OwSt',
          refreshToken: '1//04lPyornMQPhfCgYIARAAGAQSNwF-L9IrKcqNkykNGVGJBXTL-xiyy-DsQRHSC7h1Bz5CPz-lJyBJHm7FSHr0E-d6MBYNXum7kkY',
          expires: 1484314697598
           },
      secure: true,
    });
    
    const mailData = {
        from: 'shashankk.work@gmail.com',
        to: 'hello@shashank.work',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }