# YouTube Audio Bot by tomk1v

This is a Telegram bot that allows users to fetch audio from YouTube videos and send them as voice messages.

## Setup

1. Install the required dependencies:

    ```
    npm install telegraf ytdl-core axios
    ```

2. Replace `'YOUR_BOT_TOKEN'` with your actual Telegram bot token in the `BOT_TOKEN` variable.

3. Run the bot:

    ```
    node your_bot_script.js
    ```

## Usage

1. Start a chat with the bot on Telegram.

2. Send a YouTube link to the bot to fetch the audio.

   ![Screenshot from 2023-12-18 10-33-13](https://github.com/tomk1v/youtube-downloader-telegram-bot/assets/91790934/18154668-d550-42c6-9711-e374ec6b0317)


## Features

- Downloads the highest quality audio stream from YouTube.
- Sends the audio as a voice message with a thumbnail.

## Dependencies

- [Telegraf](https://telegraf.js.org/)
- [ytdl-core](https://www.npmjs.com/package/ytdl-core)
- [axios](https://www.npmjs.com/package/axios)

## Notes

- The bot replies with a message indicating that the audio file is being downloaded before sending the voice message.

## Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/tomk1v/youtube-downloader-telegram-bot/issues).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
