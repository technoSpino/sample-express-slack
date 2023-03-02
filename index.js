const express = require('express');
const bodyParser = require('body-parser');
const { IncomingWebhook } = require('@slack/webhook');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));

const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

const slackWebhook = new IncomingWebhook(slackWebhookUrl);

app.post('/notify', async (req, res) => {
  const { email, type } = {
    email : req.body.Email,
    type  : req.body.Type,
  };
  const isSpam = type === "SpamNotifcation";

  if (isSpam) {
    try {
      const response = await slackWebhook.send({
        text: `A spam notification has been received with the following email: ${email}`
      });
      console.log('Slack notification sent', response);
      res.sendStatus(200);
    } catch (error) {
      console.error(`Error sending Slack notification: ${error}`);
      res.sendStatus(500);
    }
  } else {
    console.log('Payload is not a spam notification!');
    res.sendStatus(200);
  }
});

function checkIfSpam(email, message) {
  // Logic to check if the payload is a spam notification
  // This can be a simple or complex algorithm depending on your use case
  // For example, you could check if the email address is from a known spam domain
  // or if the message contains certain keywords commonly used in spam
  return true; // Assume all payloads are spam notifications for this example
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));