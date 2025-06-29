import React from 'react';
const Footer = () => {
  return (
    <section>
      <div>
        <span className='text-lg font-semibold'>Darcy Zottis</span>
        <ul className='flex gap-6 text-sm'>
          <h2 className='font-bold'>Abas</h2>
          <li>Início</li>
          <li>Histórico</li>
          <li>Opinião</li>
          <li>Contato</li>
        </ul>
        <ul className='flex gap-6 text-sm'>
          <h2 className='font-bold'>Contatos</h2>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
