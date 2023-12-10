'use client';
import AuthButton from './authButton';

const NavMenu = () => {
  return (
    <div>
      <nav className='flex w-full flex-row justify-between border-b-2 p-4'>
        <div className='flex flex-row'>
          <div className='px-4'>
            <a className='text-sm font-semibold uppercase' href='/'>
              Lama card games
            </a>
          </div>
          <div>
            <a href='/game/browserlist'>Games</a>
          </div>
        </div>

        <div>
          <AuthButton />
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
