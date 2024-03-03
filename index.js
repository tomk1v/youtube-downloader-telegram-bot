const { Telegraf, Composer, filter } = require('telegraf');
const ytdl = require('ytdl-core');
const axios = require('axios');

// Replace 'YOUR_BOT_TOKEN' with your actual token
const BOT_TOKEN = 'YOUR_BOT_TOKEN';

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome to the YouTube Audio Bot by tomk1v! Send a YouTube link to fetch audio.');
});

async function downloadImage(url) {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  return Buffer.from(response.data, 'binary');
}

bot.on('text', async (ctx) => {
  const url = ctx.message.text;

  try {
    // Inform the user that the file is being downloaded
    ctx.reply('🚀 Downloading the audio file. Please wait...');
    
    // Get basic video info
    const info = await ytdl.getInfo(url);

    // Get the highest quality audio stream
    const audioStream = ytdl(url, { quality: 'highestaudio' });

    // Use video title and author for the filename
    const filename = `${info.videoDetails.title} - ${info.videoDetails.author.name}.m4a`;
    
    // Use the first available thumbnail URL
    const thumbUrl = info.videoDetails.thumbnails[info.videoDetails.thumbnails.length - 1].url;
    
    // Download the thumbnail image
    const thumbBuffer = await downloadImage(thumbUrl);
    
    // Send the audio as a voice message with thumbnail
    ctx.replyWithAudio(
      { source: audioStream, filename: filename },
      {
        title: info.videoDetails.title,
        performer: info.videoDetails.author.name,
        duration: info.videoDetails.lengthSeconds,
        thumb: { source: thumbBuffer }
      }
    );
  } catch (error) {
    console.error('Error:', error.message);
    ctx.reply('Error fetching audio. Please check the YouTube link and try again.');
  }
});

bot.launch();
