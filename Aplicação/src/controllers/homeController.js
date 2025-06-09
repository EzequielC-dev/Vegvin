const ambiente_processo = "desenvolvimento";
const caminho_env = ambiente_processo === "producao" ? ".env" : ".env.dev";
require("dotenv").config({ path: caminho_env });

const homeModel = require("../models/homeModel");

const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  secure: true,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_CODE,
  },
});

function sendEmail(req, res) {
  const email = req.body.emailUser;
  const subject = req.body.text;

  if (email == undefined || subject == undefined) {
    res.status(500).send("Seu E-mail ou senhas estão como indefinidas!");
  } else {
    transport
      .sendMail({
        from: email,
        to: "vegvinforum@gmail.com",
        subject: "Contato pelo Fórum",
        text: subject,
      })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        console.log("Erro: não foi possível enviar o email", error);
      });
  }
}

function getUserPhoto(req, res) {
  const id = req.params.userId;

  homeModel
    .getUserPhoto(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log("Erro: não foi possível pegar a foto do usuário", error);
    });
}

module.exports = {
  sendEmail,
  getUserPhoto,
};
