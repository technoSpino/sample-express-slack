# Getting Started

To use this app, you will need to create a Slack webhook URL and set it as an environment variable in the `docker-compose.yml` file.

### Create a Slack webhook URL

1. Go to the [Slack API website](https://api.slack.com/).
2. Click the "Create New App" button.
3. Enter a name for your app and select the workspace where you want to install it.
4. Click the "Incoming Webhooks" feature and enable it.
5. Click the "Add New Webhook to Workspace" button and authorize the app to access your Slack workspace.
6. Select the channel where you want to receive notifications and click the "Allow" button.
7. Copy the webhook URL that is displayed on the page.

### Set the Slack webhook URL

1. Set the `SLACK_WEBHOOK_URL` environment variable in the `docker-compose.yml` file to the Slack webhook URL that you copied earlier. 



### Start the app using Docker Compose

1. Install Docker and Docker Compose on your computer.
2. Open a terminal and navigate to the root directory of the project.
3. Run the following command to start the app:
```bash
docker-compose up --build
```

4. The app will start running on port 3000. You can access it by opening a web browser and navigating to `http://localhost:3000`.



That's it! You should now be able to receive Slack notifications when a spam notification is detected in the app. If you have any questions or issues, please feel free to contact me.

# Testing
You can use the following command to test the application once running
```bash
curl --request POST --header 'Content-Type: application/json' --data '{"Email":"test@gmail.com","Type":"SpamNotifcation"}' localhost:3000/notify
``` 


