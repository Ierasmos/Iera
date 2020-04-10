const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = 'n!';

const cheerio = require('cheerio');

const request = require('request')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('Njk3NDY3MzYzNTY1NzY0NjE4.Xo86kA.1mWDCxWLAFQNaiYgnRVNA_ujEuU');

client.on('message', message=>{

  let args = message.content.substring(PREFIX.lenght).split(" ");

  switch(args[0]){
    case 'n!ying':
      message.channel.send('yang')
        break;
}
switch(args[0]){
  case 'n!hi':
    message.channel.send('Hello!')
      break;
}

switch(args[0]){
  case 'n!whyareyougay':
    message.channel.send('Im not >.<')
      break;
}
switch(args[0]){
  case 'n!whyareyoulesbian':
    message.channel.send('h-h-how did you k-know? >.<')
      break;
}
switch(args[0]){
  case 'n!cat':
    message.channel.send('nyaa~')
      break;
}
switch(args[0]){
  case 'n!n-word':
    message.channel.send('racist, baka')
      break;
}

switch(args[0]){
  case 'n!religion':
    message.channel.send('Join the neko religion by changing your Profile picture into a neko, and being LGBTQ+ friendly nya~ see you soon')
      break;
}
switch(args[0]){
  case 'n!twitter':
    message.channel.send('My developer can be found on twitter using this link: https://twitter.com/Ierasmos')
      break;
  case 'n!info':
    if(args[1] === 'version')
      message.channel.send('I am currently in Version 1.1.5')
    if(args[1] === 'author'){
      message.channel.send('I was developed by Ierasmos')
    }
    break;
    case 'n!clear':
      if(!args[1]) return message.reply('Error please define second arguament')
      message.channel.bulkDelete(args[1]);
      break;
   }
   switch(args[0]){
    case 'n!neko':
    image(message);

    break;
   }

});


function image(message){
 
  var options = {
      url: "http://results.dogpile.com/serp?qc=images&q=" + "neko",
       method: "GET",
      headers: {
          "Accept": "text/html",
          "User-Agent": "Chrome"
      }
  };
  
  request(options, function(error, response, responseBody) {
    if (error) {
        return;
    }


    $ = cheerio.load(responseBody);


    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
   
    console.log(urls);

    if (!urls.length) {
       
        return;
    }

    // Send result
    message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
});

}
