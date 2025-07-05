import { UsersThree, Buildings, BookBookmark } from "phosphor-react";

function Principles() {
  return (
    <section className="bg-[#0E1C29] text-white py-20 px-6 lg:px-60 text-center">
      <h2 className="text-[40px] lg:text-4xl font-bold mb-6">
        O que penso e defendo
      </h2>
      <p className="text-[24px] mb-2">
        Vivemos um tempo em que ficar em silêncio já não é mais opção.
      </p>
      <p className="text-[24px] mb-12">
        Por isso, me coloco como voz ativa em defesa de princípios que acredito:
      </p>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        {/* Card 1 */}
        <div className="bg-white text-[#0E1C29] rounded-2xl px-6 py-6 w-[464px] h-[229px] flex flex-col items-start text-left gap-4 shadow-md">
          <UsersThree size={40} weight="duotone" />
          <p className="font-semibold text-[22px] text-base leading-snug">
            Uma sociedade mais livre e justa só <br />
            nasce com indivíduos conscientes
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-[#0E1C29] rounded-2xl px-6 py-6 w-[464px] h-[229px] flex flex-col items-start text-left gap-4 shadow-md">
          <Buildings size={40} weight="duotone" />
          <p className="font-semibold text-[22px] text-base leading-snug">
            Precisamos de menos burocracia e <br />
            mais estímulo ao empreendedorismo.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-[#0E1C29] rounded-2xl px-6 py-6 w-[464px] h-[229px] flex flex-col items-start text-left gap-4 shadow-md">
          <BookBookmark size={40} weight="duotone" />
          <p className="font-semibold text-[22px] text-base leading-snug">
            A educação precisa ser prioridade <br />
            real — conectada ao mercado e ao <br />
            mundo atual.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Principles;
