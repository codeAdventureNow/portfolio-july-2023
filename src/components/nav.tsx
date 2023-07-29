export default function Nav() {
  return (
    <header>
      <h2 className='logo'>
        <i className='bx bx-hard-hat'></i>
        Nate <span className='accent-color'>Mueller</span>{' '}
      </h2>
      <ul className='navlist'>
        <li>
          <a href='#' className='active'>
            Projects
          </a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <div className='h-main'>
        <a href='#' className='h-btn'>
          Resume
        </a>
        <div className='bx bx-menu' id='menu-icon'></div>
        <div className='bx bx-moon' id='darkmode'></div>
      </div>
    </header>
  );
}
