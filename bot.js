const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/*جميع الحقوق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });
client.on('guildMemberAdd',async member => {
  const Canvas = require('canvas');
  const jimp = require('jimp');
  const w = ['./welcome_4.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(800, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();
 
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 800, 300);
 
})
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                 if (err) return console.log(err);
 
          ctx.font = '36px Arial';
          ctx.fontSize = '72px';
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(member.user.username, 545, 177);
         
          ctx.font = '16px Arial Bold';
          ctx.fontSize = '72px';
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);
         
          let Avatar = Canvas.Image;
          let ava = new Avatar;
          ava.src = buf;
          ctx.beginPath();
          ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(ava, 36, 21, 260, 260);
           
          const c = hero.channels.get(" 488330464604454922 ");
          c.sendFile(canvas.toBuffer());
 
});
});
});
client.on('ebnklb',function(ebnklb) {
    
    if(ebnklb.content.startsWith("<@488149909959082004>")) {
        ebnklb.channel.send('Hey Im **arbot!**  A Nice Bot Developed By:`| 𝔐7𝔐𝔇❤ , roýale .#2992`')
        ebnklb.channel.send('My Prefix `*`')

    }
});
var prefix = "*"
client.on('message', message => {

  if (message.content.startsWith( prefix + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("488337520913022976").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });
client.on('message',  (message) => {
        if(message.content.startsWith('*punch')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }

  let punches = [
    'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} عطاك كففف ${user.username}! :punch:`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});
client.on("ready", async () => {
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
        console.log(`${client.user.username} With ${client.users.size} Member`)
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
        console.log(`${client.user.username} With ${client.users.size} Member`)
    }
    client.user.setStatus("online");
});

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
    }
});

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(client.users.size > 1) {
        client.user.setActivity(`With ${client.users.size} Member`);
    } else {
        client.user.setActivity(`With ${client.users.size} Member`);
    }
});

client.on("message", async () => {
  
})
client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});
client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? ðŸ¤”   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** Ù…Ù…Ù†ÙˆØ¹ Ù†Ø´Ø± Ø§Ù„Ø±ÙˆØ§Ø¨Ø· :angry: ! **`)
    }
}
});

client.on('message', message => {
    if(message.content.includes('youtube')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? ðŸ¤”   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** Ù…Ù…Ù†ÙˆØ¹ Ù†Ø´Ø± Ø§Ù„Ø±ÙˆØ§Ø¨Ø· :angry: ! **`)
    }
}
});
  client.on('message', async message => {
  if(message.content.startsWith(prefixall + "رسالة")) {
    let i = client.users.size;
    if(message.author.id !== '340991135264800778,472573894323077150') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});
client.on('message', message => {
    if (message.content == ("*ban")) {
               
 
        const mmss = require('ms');
        let reason = message.content.split(' ').slice(3).join(' ');
        let time = message.content.split(' ')[2];
        let guild = message.guild;
 
        let usermention = message.mentions.users.first();
 
        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
            return message.reply(':lock: **You** need `BAN_MEMBERS` Permissions to execute `ban`')
        }
 
        if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
            return message.reply(':lock: **I** need `BAN_MEMBERS` Permissions to execute `ban`')
        }
 
   
 
        if (message.mentions.users.size < 1) {
            return message.reply('You need to mention someone to Ban them!')
        }
 
        if (message.author.id === usermention.id) {
            return message.reply('You cant punish yourself :wink:')
        }
 
        if (!time) {
            return message.reply(`How much time ? **Usage:**\`*ban [@mention] [1d] [Reason]\``)
        }
 
        if (!time.match(/[1-7][s,m,h,d,w]/g)) {
            return message.reply('I need a valid time ! look at the Usage! right here: **Usage:**`-ban [@mention] [1m] [Reason]`')
        }
 
        if (!reason) {
            return message.reply(`You must give me a reason for the ban **Usage:**\`*ban [@mention] [1d] [Reason]\``)
        }
 
        if (!message.guild.member(usermention).bannable) {
            return message.reply('This member is above me in the `role chain` Can\'t ban them')
        }
 
        message.reply("This user has been banned form the server.");
 
        usermention.send(`You've just got banned from ${guild.name}  \n State reason: **${reason}** \n **Disclamer**: If the ban is not timed and Permanent you may not appeal the **BAN**!`)
       message.guild.ban(usermention, 7);
       setTimeout(() => {
           message.guild.unban(usermention.id);
       }, mmss(time));
      message.channel.send({embed: {
           color: 3447003,
           author: {
             name: client.user.username,
             icon_url: client.user.avatarURL
           },
           fields: [{
               name: "Ban:",
               value: `**Banned:** ${usermention.username}#${usermention.discriminator}\n**Moderator:** ${message.author.username} \n**Duration:** ${mmss(mmss(time), {long: true})} \n**Reason:** ${reason}`
             }
           ],
           timestamp: new Date(),
           footer: {
             icon_url: client.user.avatarURL,
             text: "Dragon"
           }
         }
       });
   }
});
client.on('message', message => {
  if (message.content.startsWith("*avatar")) {

      var mentionned = message.mentions.users.first();
  var king66s;
    if(mentionned){
        var king66s = mentionned;
    } else {
        var king66s = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${king66s.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});
 client.on('message', eyad => {
  if (eyad.content.startsWith('mute')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم اعطائك ميوت كتابي
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم اعطائه الميوت الكتابي بنجاح
بواسطة : <@${eyad.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(20000)})
    }
})
client.on("message",function(message) {
    if(message.content.startsWith(prefix + "stats")) {
           let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
let ms = 1000;
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("# | SenioR |") 
let heroo = new Discord.RichEmbed()
.setColor('RANDOM')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setAuthor(client.user.username,client.user.avatarURL)
.addField("MyPrefix :",`**[ ${prefix} ]**`,true)
.addField("Guilds :","**[ "+client.guilds.size+" ]**",true)
.addField("Channels :","**[ "+client.channels.size+" ]**",true)
.addField("Users :","**[ "+client.users.size+" ]**",true)
.addField("MyName : ","**[ "+client.user.username+" ]**",true)
.addField("MyID :","**[ "+client.user.id+" ]**",true)
.addField("RamUsage :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("SenioR TeaM. |")
  message.channel.send({embed:v1}).then(m => m.edit({embed:heroo})),ms; 
    }
});
const adminprefix = "1";
const devs = ['340991135264800778' , '472573894323077150' , '431474404007084035'];
client.on('message', message => {//for dev
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/faresgameryt");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

client.on('message', message => {//restart
    if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
            console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
            Rocket.destroy();
            child_process.fork(__dirname + "/bot.js");
            console.log(`تم اعادة تشغيل البوت`);
        }


    });
});
const Sra7a = [ //saraha
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {//saraahaaah
if (message.content.startsWith('*sarahah')) {
    if(!message.channel.guild) return message.reply('** هذا الامر فقط للسيرفرات **');
 var Rocket= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()

  message.channel.sendEmbed(Rocket);
  message.react("??")
}
});
client.on('message', msg => {
      if(!msg.guild) return;
        if (msg.content.startsWith(prefix +'cc')) {
         let args = msg.content.split(" ").slice(1);
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    let ra3d = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.author.avatarURL)
    .setDescription(`هل انت متاكد من انشاء مستند الكاتيجوري ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)
    msg.channel.send(ra3d).then(message => {
     message.react('✅').then(r=>{
     message.react('❌').then(r=>{
     let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
     let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

     let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
     let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
    er.on("collect", r => {
    msg.channel.send("`تم الالغاء`")
    message.delete();
    })
    tt.on("collect", r => {
    msg.guild.createChannel(args.join(' '), 'category').then(ra3deyad => {
    channelCreated = ra3deyad.createdAt
          const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail('https://cdn.discordapp.com/attachments/453024271560867853/455104628674134019/2000px-Twemoji_1f4dd.svg.png')
      .addField(`اسم القناة`, `${ra3deyad.name}`, true)
      .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
      .addField(`نوع القناة`, `${ra3deyad.type}`, true)
      .addField(`متى انشأت القناة`, `${channelCreated}`)
     msg.channel.send({embed})
        message.delete();
    })
    })
    })
    })
    })
    }
    });
    client.on('message', msg => {
          if(!msg.guild) return;
            if (msg.content.startsWith(prefix +'cv')) {
             let args = msg.content.split(" ").slice(1);
            if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
        let ra3d = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(msg.author.avatarURL)
        .setDescription(`هل انت متاكد من انشاء روم صوتي ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)
        msg.channel.send(ra3d).then(message => {
         message.react('✅').then(r=>{
         message.react('❌').then(r=>{
         let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
         let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
         let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
         let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
        er.on("collect", r => {
        msg.channel.send("`تم الالغاء`")
        message.delete();
        })
        tt.on("collect", r => {
        msg.guild.createChannel(args.join(' '), 'voice').then(ra3deyad => {
        channelCreated = ra3deyad.createdAt
              const embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setImage()
          .setThumbnail('https://cdn.discordapp.com/attachments/453024271560867853/455104628674134017/1500920527.jpg')
          .setURL('')
          .addField(`اسم القناة`, `${ra3deyad.name}`, true)
          .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
          .addField(`نوع القناة`, `${ra3deyad.type}`, true)
          .addField(`متى انشأت القناة`, `${channelCreated}`)
         msg.channel.send({embed})
            message.delete();
        })
        })
        })
        })
        })
        }
        });
client.on('message', message => {//mute
    if (message.content.startsWith('*mute')) {
  if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
  let men = message.mentions.users.first()
  let mas = message.author
  if(!men) return message.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
  message.guild.channels.forEach(c => {
  c.overwritePermissions(men.id, {
            SEND_MESSAGES: false
  })
      })
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**
   <@${men.id}>
  لقد تم اعطائك ميوت كتابي
  بواسطة : <@${message.author.id}> **`)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
client.on('message', msg => {
              if(!msg.guild) return;
                if (msg.content.startsWith(prefix +'ct')) {
                 let args = msg.content.split(" ").slice(1);
                if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
            let ra3d = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(msg.author.avatarURL)
            .setDescription(`هل انت متاكد من انشاء شات كتابي ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)
            msg.channel.send(ra3d).then(message => {
             message.react('✅').then(r=>{
             message.react('❌').then(r=>{
             let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
             let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
             let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
             let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
            er.on("collect", r => {
            msg.channel.send("`تم الالغاء`")
            message.delete();
            })
            tt.on("collect", r => {
            msg.guild.createChannel(args.join(' '), 'text').then(ra3deyad => {
            channelCreated = ra3deyad.createdAt
                  const embed = new Discord.RichEmbed()
              .setColor('RANDOM')
              .setImage()
              .setThumbnail('http://cdn.onlinewebfonts.com/svg/img_323299.png')
              .addField(`اسم القناة`, `${ra3deyad.name}`, true)
              .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
              .addField(`نوع القناة`, `${ra3deyad.type}`, true)
              .addField(`متى انشأت القناة`, `${channelCreated}`)
             msg.channel.send({embed})
                message.delete();
            })
            })
            })
            })
            })
            }
            });
client.login(process.env.BOT_TOKEN);
