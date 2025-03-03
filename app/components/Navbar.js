// // Navbar.js
// export default function Navbar() {
//     return (
//       <nav className="p-4 bg-gray-700 text-white flex justify-between">
//         <h2 className="text-xl">Logo</h2>
//         <ul className="flex gap-4">
//           <li>Home</li>
//           <li>About</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}