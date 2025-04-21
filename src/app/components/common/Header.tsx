import Link from 'next/link';
// import styles from './header.module.scss';

export default function Header() {
  return (
    <div>
      <div className="header-container-wrapper">
      <div className="header-container">
        <ul className="content">
          <li className="item">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="item">
            <Link href={'/chat'}>Chat</Link>
          </li>
          <li className="item">
            <Link href={'/integrations'}>Integrations</Link>
          </li>
          <li className="item">
            <Link href={'/docs'}>Docs</Link>
          </li>
          <li className="item">
            <Link href={'/docs'}>Download Local MCP Tunnel Tool</Link>
          </li>
          <li className="item cta">
            <Link href={'/create-mcp-server'}>Create MCP Server</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}
