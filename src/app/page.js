import React from 'react';

import { getBlogPostList } from '@/helpers/file-helpers';
import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

async function Home() {
  // let blogPosts;
  // await getBlogPostList().then(data => {
  //   blogPosts = data;
  // });
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogPosts.map(({ slug, title, abstract, publishedOn }) => (
        <BlogSummaryCard
          key={slug}
          slug={slug}
          title={title}
          abstract={abstract}
          publishedOn={publishedOn}
        />
      ))}
    </div>
  );
}

export default Home;
