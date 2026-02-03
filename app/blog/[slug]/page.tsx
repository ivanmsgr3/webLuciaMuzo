import { getPostBySlug, getPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import styles from '../Blog.module.css';

// Next.js 15 page props type
type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Artículo no encontrado',
        };
    }

    return {
        title: `${post.title} | Co.co Make Up`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            authors: [post.author],
        },
    };
}

export async function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Simple custom renderer for the content
    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            const trimmed = line.trim();

            if (!trimmed) return <div key={index} style={{ height: '1rem' }} />;

            if (trimmed === '---') {
                return <hr key={index} className={styles.divider} />;
            }

            if (trimmed.startsWith('### ')) {
                return (
                    <h3 key={index}>
                        {trimmed.replace('### ', '')}
                    </h3>
                );
            }

            if (trimmed.startsWith('* ')) {
                return (
                    <li key={index}>
                        {trimmed.replace('* ', '')}
                    </li>
                );
            }

            // Default paragraph
            return (
                <p key={index}>
                    {line}
                </p>
            );
        });
    };

    return (
        <article className="section">
            <div className={styles.articleContainer}>
                <header className={styles.articleHeader}>
                    <div className={styles.meta} style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
                        <span>/</span>
                        <span>{post.subtitle}</span>
                    </div>

                    <h1 className={styles.articleTitle}>
                        {post.title}
                    </h1>

                    <div className={styles.articleMeta}>
                        Por {post.author}
                    </div>
                </header>

                <div className={styles.content}>
                    {renderContent(post.content)}
                </div>

                <div className={styles.backLink}>
                    <Link href="/blog">
                        ← Volver al blog
                    </Link>
                </div>
            </div>
        </article>
    );
}
