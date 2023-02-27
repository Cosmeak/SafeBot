import { Client, ClientOptions } from "discord.js";
import * as dotenv from "dotenv";
import interactionCreate from "./listeners/interactionCreate";
dotenv.config();

import ready from "./listeners/ready";

console.log("Bot is starting...");

const client = new Client({
	intents: []
});

ready(client);
interactionCreate(client);

client.login(process.env.BOT_KEY);