import Link from 'next/link';
import styles from './page.module.scss';

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
        </ul>
      </div>
    </div>
    </div>
  );
}
