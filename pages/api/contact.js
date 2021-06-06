export default async function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
      secure: false,
         auth: {
              user: 'shashankk.work@gmail.com',
              pass: process.env.password,
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