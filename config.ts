interface DiscordConfig {
  botToken: string;
  clientId: string;
  clientSecret: string;
  serverId: string;
  logChannelId: string;
}

interface MongoDBConfig {
  uri: string;
}

interface WebsiteConfig {
  baseUrl: string;
}

interface Config {
  discord: DiscordConfig;
  mongodb: MongoDBConfig;
  website: WebsiteConfig;
}

const config: Config = {
  discord: {
    botToken: process.env.DISCORD_BOT_TOKEN || "",
    clientId: process.env.DISCORD_CLIENT_ID || "1353092392907182102",
    clientSecret: process.env.DISCORD_CLIENT_SECRET || "SClLvfE4ToObXA9DT8-IU4MjvnKh92w3",
    serverId: process.env.DISCORD_SERVER_ID || "1354492353951563776",
    logChannelId: process.env.DISCORD_LOG_CHANNEL_ID || "1354492355180494920"
  },
  mongodb: {
    uri: process.env.MONGODB_URI || "mongodb+srv://a7aa:a7a@cluster0.89t3a9z.mongodb.net/AquaList?retryWrites=true&w=majority"
  },
  website: {
    baseUrl: process.env.WEBSITE_BASE_URL || "https://aqualist.vercel.app"
  }
};

export default config; 
