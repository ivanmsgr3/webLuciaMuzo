import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import styles from './Blog.module.css';

export const metadata = {
    title: 'Blog | Co.co Make Up',
    description: 'Artículos sobre maquillaje editorial, novias y cuidado de la piel en Granada.',
};

export default function BlogPage() {
    const posts = getPosts();

    return (
        <div className="section">
            <div className="container">
                <div className={styles.blogHeader}>
                    <h1 className={styles.blogTitle}>
                        <span className={styles.titleMain}>Diario de</span> <span className={styles.titleAccent}>belleza</span>
                    </h1>
                    <p className={styles.blogSubtitle}>
                        Reflexiones sobre belleza, técnica y la luz de Granada.
                    </p>
                </div>

                <div className={styles.grid}>
                    {posts.map((post) => (
                        <article key={post.slug} className="">
                            <Link href={`/blog/${post.slug}`} className={styles.card} style={{ textDecoration: 'none' }}>
                                <div className={styles.cardContent}>
                                    <div className={styles.meta}>
                                        <span>{post.subtitle}</span>
                                        <span>•</span>
                                        <span>{post.author}</span>
                                    </div>

                                    <h2 className={styles.postTitle}>
                                        {post.title}
                                    </h2>

                                    <p className={styles.excerpt}>
                                        {post.excerpt}
                                    </p>

                                    <span className={styles.readMore}>
                                        Leer artículo
                                    </span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
