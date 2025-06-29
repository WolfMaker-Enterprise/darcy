export default function GradientContainer({ inverted, children, image }) {
  const gradientClass = inverted
    ? 'bg-gradient-to-r from-transparent to-[#16202B]'
    : 'bg-gradient-to-r from-[#16202B] to-transparent';

  return (
    <section
      className={`relative w-full h-screen bg-cover bg-center bg-[#16202B]`}
    >
      <img
        src={image}
        alt='Background'
        className='absolute inset-0 w-full h-full object-cover opacity-20 bg-blend-luminosity'
      />
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage:
            'radial-gradient(cicle at center right, transparent 5%, #16202B 70%)',
        }}
      />
      <div className='relative z-20'>{children}</div>
    </section>
  );
}
