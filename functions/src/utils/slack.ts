import axios from 'axios';

export const postSlackMessage = async function (
  webhookUrl: string,
  text: string,
  username: string | undefined,
  icon_url: string | undefined,
  icon_emoji: string | undefined,
  channel: string | undefined,
) {
  return await axios.post(webhookUrl, {
    text,
    username,
    icon_url,
    icon_emoji,
    channel,
  });
};
