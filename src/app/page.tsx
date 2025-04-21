import Head from 'next/head'
import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MCP Server Wiki</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.item}>
              <h1 className={styles.h1}>MCP Server Wiki 🚀</h1>
              <p>Unlock the future of AI with <strong>Model Context Protocol (MCP)</strong> servers.</p>
              <p>Stay tuned for the ultimate <strong>MCP server directory</strong> - featuring real-time, dynamic, and scalable AI solutions!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
