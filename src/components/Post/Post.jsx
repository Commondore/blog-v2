import { memo } from 'react';

import styles from './Post.module.css';

const Post = ({ title, author }) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.title}>{title}</h3>
      <p>
        Author: <strong>{author}</strong>
      </p>
    </div>
  );
};

export default memo(Post);
