// Copyright (C) 2018 Yoshiro MIHIRA
// For license information, see LICENSE.txt

'use strict';

var iconv = require('iconv-lite');

// on AWS lambda you need to set Environment variables
//  SENDGRID_API_KEY  Restricted Access--> Mail Send --> Full Access
//  MSG_TO
//  MSG_FROM

// currently(2018/Oct/13), I use this code with Node-8.10 on AWS lambda

//  required node.js libraries
//  npm install iconv-lite
//  npm install --save @sendgrid/mail

//////////////////////////////////////////////////////////////////
// Sendgrid settings
// based from https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg_To = process.env.MSG_TO;
const msg_From = process.env.MSG_FROM;

exports.handler = (event, context, callback) => {
    console.log(event.body);
    // currently(2018/Oct/13) IFTTT send message to Webhook as UTF-8
    // but node can't handle that, so decode by iconv-lite from UTF-8 to UTF-8
    var buf    = new Buffer(event.body, 'ascii');
    var AddItem = iconv.decode(buf,  "UTF-8");
    console.log(AddItem);

    const msg = {
	to: msg_To,
	from: msg_From,
	subject: 'Item ' + AddItem + ' added to Shopping List',
	text: AddItem,
	// I don't like html format. So comment out it.
	//	html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
    
    callback(null, {
        "statusCode": 200,
        "body": "OK",
    });
};
