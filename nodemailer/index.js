const nodemailer = require('nodemailer');
const email = {
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9430ff6e38935c",
    pass: "8f0be22fdff73d"
  }
};

// 이메일 보내는 프로그램을 아래 함수 블록 내부에 구현.
/*
Email을 보내려면 메일서버인 SMTP가 있어야 함.
그리고 그 메일을 보낼 수 있는 관리자 급에 해당하는 계정 정보가 있어야 함.
*/
const send = async (option) => {
	nodemailer.createTransport(email).sendMail(option, (error, info) => {
		if(error) {
			console.log(error);
		} else {
			console.log(info);
			return info.response;
		}
	}); // createTransport(관리자 급에 해당하는 계정 정보)가 들어감
};

let emailData = {
	from: 'dev.skyachieve91@gmail.com',
	to: 'dev.skyachieve91@gmail.com',
	subject: 'node.js테스트 메일 제목입니다.',
	text: 'node.js 테스트 메일 본문입니다.'
};

send(emailData);