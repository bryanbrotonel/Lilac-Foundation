import { Handler } from '@netlify/functions';
const CONTENTFUL = require('contentful');

const handler: Handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // If params are not provided, return error
  const params = JSON.parse(event.body || '{}');
  if (!params && Object.keys(params).length === 0) {
    return { statusCode: 405, body: 'Query parameters requrired' };
  }

  const space = params.space;
  let credentials;
  let items;

  // Contentful Post space credentials
  const postCredentials = {
    space: process.env.REACT_APP_CONTENTFUL_POSTS_SPACE || '',
    accessToken: process.env.REACT_APP_CONTENTFUL_POSTS_TOKEN || '',
  };

  // Contentful Content space credentials
  const contentCredentials = {
    space: process.env.REACT_APP_CONTENTFUL_CONTENT_SPACE || '',
    accessToken: process.env.REACT_APP_CONTENTFUL_CONTENT_TOKEN || '',
  };

  // Determine which Contentful space to use
  switch (space) {
    case 'posts':
      credentials = postCredentials;
      break;
    case 'content':
      credentials = contentCredentials;
      break;
    default:
      credentials = contentCredentials;
      break;
  }

  // Create Contentful client
  const client = CONTENTFUL.createClient(credentials);

  // If id is provided, get single entry
  if (params.id) {
    items = await client.getEntry(params.id);
  } else if (params.query) {
    items = await client.getEntries(params.query);
  } else {
    return {
      statusCode: 405,
      body: 'Query parameters requrired',
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};

export { handler };
