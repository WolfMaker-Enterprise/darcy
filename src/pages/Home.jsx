import React from 'react';
import GradientConteiner from '../components/GradientConteiner';
import TextHighlited from '../components/TextHighlited';
import TextTitle from '../components/TextTitle';
import TextDescription from '../components/TextDescription';

export default function Home() {
  return (
    <div>
      <GradientConteiner image={'/image/bg/bg_home.png'}>
        <TextHighlited text={'Dr Sarro Nelas'} />
        <TextTitle text={'A sua saúde é o nosso compromisso'} />
        <TextDescription
          text={'A nossa missão é cuidar de si e da sua saúde.'}
        />
      </GradientConteiner>
    </div>
  );
}
