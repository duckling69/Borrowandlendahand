import { Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('63afdcbca16a837bd541');

export default client;