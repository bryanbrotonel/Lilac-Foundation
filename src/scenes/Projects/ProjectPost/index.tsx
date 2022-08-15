import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContentfulProjectEntry } from '../../../api/contentful';
import ContentPost from '../../../components/ContentPost';
import Loading from '../../../components/Loading';

function ProjectPost() {
  const params = useParams();

  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetchContentfulProjectEntry(params.postId).then((post) => {
      setCurrentPost(post);
    });
  }, []);

  let projectPost;

  if (currentPost === null) projectPost = <Loading />;

  if (currentPost !== null) {
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
