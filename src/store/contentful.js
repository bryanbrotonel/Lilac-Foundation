import * as contentful from 'contentful';

// The Lilac Foundation Client
export const postClient = contentful.createClient({
    space: 's85q1dv8e3m5',
    accessToken: 'e1f99556ca22933d807bbeba1f93e70d5ebaa2bd37d43e099d26f653e9ade466'
});

// The Lilac Foundation Client
export const contentClient = contentful.createClient({
    space: 'lviz1x4y4a6n',
    accessToken: '788382ad2aed44f757676fb78d448b35e5633b7c2f3ca1bb456eec2c587c5231'
});