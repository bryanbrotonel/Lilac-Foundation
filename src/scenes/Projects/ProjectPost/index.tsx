import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContentfulPostsEntry } from '../../../api/contentful';
import ContentPost from '../../../components/ContentPost';
import Loading from '../../../components/Loading';
import { TypeProjectPost } from '../../../types';
import NotFound from '../../NotFound';

function ProjectPost() {
  const params = useParams();

  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetchContentfulPostsEntry('projectPost', params.postId).then((post) => {
      setCurrentPost(post as TypeProjectPost);
    });
  }, []);

  let projectPost;

  if (currentPost === null) projectPost = <Loading />;

  if (currentPost === undefined) projectPost = <NotFound />;

  if (currentPost !== null && currentPost !== undefined) {
    const {
      fields: { title, content, headerImage },
      sys: { createdAt },
    } = currentPost;

    projectPost = (
      <ContentPost
        title={title}
        headerImage={headerImage}
        content={content}
        date={createdAt}
      />
    );
  }

  return <div>{projectPost}</div>;
}

export default ProjectPost;
