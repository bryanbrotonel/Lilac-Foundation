import { Handler } from '@netlify/functions';
import axios, { AxiosError, AxiosResponse } from 'axios';

const handler: Handler = async (event, context) => {
  // Default space set to content space
  var space = process.env.REACT_APP_CONTENTFUL_CONTENT_SPACE;
  var token = process.env.REACT_APP_CONTENTFUL_CONTENT_TOKEN;

  // Default order is descending by createdAt
  var order = '-sys.createdAt';

  var contentfulEndpoint = 'https://cdn.contentful.com/';

  const querystring = event.queryStringParameters;

  // If querystring is not empty, use it to override default values
  if (querystring && Object.keys(querystring).length !== 0) {
    // If post space is specified, use that space, otherwise use default content space
    if (querystring.space != null && querystring.space == 'posts') {
      space = process.env.REACT_APP_CONTENTFUL_POSTS_SPACE;
      token = process.env.REACT_APP_CONTENTFUL_POSTS_TOKEN;
    }

    contentfulEndpoint += `spaces/${space}/environments/master/`;

    // If querystring has an order, use that order
    if (querystring.order != null) {
      order = querystring.order;
    }

    // If entry is specified, use that endpoint
    if (querystring.entry_id != null) {
      contentfulEndpoint += `entries/${querystring.entry_id}?`;
    }
    // If content type is specified, use that endpoint
    else if (querystring.content_type != null) {
      contentfulEndpoint += `entries?content_type=${querystring.content_type}&`;

      // If querystring has a equaltity operator, use that operator
      if (
        querystring.equal_attribute != null &&
        querystring.equal_value != null
      ) {
        contentfulEndpoint += `${querystring.equal_attribute}=${querystring.equal_value}&`;
      }
    }
  }
  // If no querystring is specified, use default endpoint
  else {
    contentfulEndpoint += `spaces/${space}/environments/master/entries?`;
  }

  contentfulEndpoint += `select=sys.id,sys.createdAt,fields&order=${order}&access_token=${token}`;

  return axios
    .get(contentfulEndpoint)
    .then(function (response: AxiosResponse) {
      // handle success
      return {
        statusCode: 200,
        body: JSON.stringify(response.data),
      };
    })
    .catch(function (error: AxiosError) {
      console.log(error);
      return {
        statusCode: 422,
        body: `ContentfulAPI.ts Error: ${error}`,
      };
    });
};

export { handler };
