  // Creates url with post title and id
  export function createURL(str, title, id) {
    return `${str[0]}${encodeURIComponent(title).replace(/\s+/g, '-').toLowerCase()}-${id}`;
  }