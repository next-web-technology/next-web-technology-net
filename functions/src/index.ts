import * as functions from 'firebase-functions';
import { postSlackMessage } from './utils/slack';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const contact = functions
  .region('asia-northeast1')
  .https.onRequest(async (request, response) => {
    try {
      functions.logger.info(request.body, {
        structureData: true,
      });
      if (request.method === 'OPTIONS') {
        functions.logger.info('OPTIONS method was requested');
        response.set('Access-Control-Allow-Origin', '*');
        response.set(
          'Access-Control-Allow-Methods',
          'GET, HEAD, OPTIONS, POST',
        );
        response.set(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept',
        );
        response.json({ data: { status: 'success' } });
        return;
      }
      const slackMessageText =
        `email: ${request.body.email}\n` +
        `name: ${request.body.name}\n` +
        `title: ${request.body.title}\n` +
        `content: \n${request.body.content}`;
      functions.logger.info(slackMessageText);
      const postSlackMessageResult = await postSlackMessage(
        functions.config().slack.url,
        slackMessageText,
        undefined,
        undefined,
        undefined,
        undefined,
      );
      functions.logger.info(postSlackMessageResult, {
        structureData: true,
      });
      response.set('Access-Control-Allow-Origin', '*');
      response.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
      response.set(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
      );
      response.json({ data: { status: 'success' } });
    } catch (error) {
      functions.logger.error(error, { structureData: true });
      response.set('Access-Control-Allow-Origin', '*');
      response.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
      response.set(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
      );
      response.json({ data: { status: 'failure' } });
    }
  });
