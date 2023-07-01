import CTAButton from '@/components/CTAButton';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col-reverse lg:flex-row justify-around items-center pb-[100px] px-3">
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl max-w-[666px]">
          Get a <span className="text-highlight">fresh pizza</span> in less than{' '}
          <span className="text-highlight">20 min</span>
        </h1>
        <p className="text-base md:text-2xl font-description text-navbarNotSelected">
          You won&apos;t regret the taste
        </p>
        <CTAButton className="mt-6" name="ORDER NOW" />
      </div>
      <div className="w-[350px] h-[300px] md:w-[400px] md:h-[350px] xl:w-[550px] xl:h-[550px] relative">
        <Image
          src="/pizza-landing-page.png"
          fill
          alt="A pizza with two parts on the air with a lot of sauce in the between the rest of the pizza"
        />
      </div>
    </section>
  );
}
