
import Link from 'next/link';

function Footer() {
  return (
  <footer>
<div className='flex container align-center ' style={{padding:"20px 0"}}>
    <div >
    <ul className='flex gap' >
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
    </div>
    <div>
        <p>Subscribe to our newsletter</p>
        <div className='flex gap'>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
    </div>
</div>
<p className='center'>&copy; 2024 Your Website Name. All Rights Reserved.</p>
  </footer>
  )
}

export default Footer
