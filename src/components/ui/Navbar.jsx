import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const listitens = [
    { to: '/', label: 'Início' },
    { to: '/historico', label: 'Histórico' },
    { to: '/opniao', label: 'Opinião' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <nav className='fixed top-0 w-full h-[120px] z-50 bg-white/10 backdrop-blur-md text-white'>
      <div className='flex justify-between items-center px-6 py-4'>
        <span className='text-lg font-semibold'>Darcy Zottis</span>
        <ul className='flex gap-6 text-sm'>
          {listitens.map((item, index) => (
            <NavBarListItem key={index} to={item.to}>
              {item.label}
            </NavBarListItem>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

function NavBarListItem({ to, children }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? 'text-emerald-300' : isActive ? 'text-amber-300' : ''
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
