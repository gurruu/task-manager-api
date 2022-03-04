
const sgMail=require('@sendgrid/mail')




  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
  const sendWelcomeMail=(email,name)=>{

    sgMail.send({
      to: email,
      from: "gauravsingh21100@gmail.com",
      subject: "Thanks For joining In.",
      text: `Welcome to the app ,${name}. Let me know how you get along with the app`,
    });
  }

  const sendCncellationName=(email,name)=>{
    sgMail.send({
      to: email,
      from: "gauravsingh21100@gmail.com",
      subject: "Sorry to see you Go😥",
      text: `GoodBye, ${name}. I hope to see you soon`,
    });
  }

  module.exports={
      sendWelcomeMail,
      sendCncellationName
  }