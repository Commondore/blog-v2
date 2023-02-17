import { memo } from 'react';

import styles from './Post.module.css';

const Post = ({ title, author, selected }) => {
  return (
    <div className={styles.post} onClick={selected}>
      <h3 className={styles.title}>{title}</h3>
      <p>
        Author: <strong>{author}</strong>
      </p>
    </div>
  );
};

export default memo(Post);
