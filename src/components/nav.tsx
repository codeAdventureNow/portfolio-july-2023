export default function Nav() {
  return (
    <nav>
      <h2 className='logo'>
        Nate <span className='accent-color'>Mueller</span>{' '}
      </h2>
      <ul>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <button type='button'>Resume</button>
    </nav>
  );
}
