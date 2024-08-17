import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="container mx-auto">
      <h3 className="uppercase text-6xl md:text-8xl text-center center pt-32">
        designing <span className='font-rony text-secondary'> bold</span> & <span className='font-rony text-primary'>engaging</span> brands
      </h3>
      <p className='uppercase text-3xl text-center center pt-32'>
        i create strategic & iconic visual identities <br /> to help your business grow
      </p>
      <p className='text-3xl text-center center pt-32 mt-20'>
        As a junior Brand Designer, i get to combine my passion for art
        and design with my love for technology.
      </p>
      <p className='text-3xl text-center center pt-32'>
        showcasing expertise in creating visually compelling designs
        that effectively communicate brand identity and resonate with target audiences.
      </p>
      <p className='text-3xl text-center center pt-32'>
        driven by a relentless pursuit of perfection and keen eye for detail. I thrive on exploring new challenges and
        opportunities that push the boundaries of my creativity. Believing fervently in the transformation power of design to
        effectively communicate messages ans evoke emotions. I approach each project with this conviction.
      </p>

      <div className="grid w-full grid-cols-8 mt-20">
        <div className="col-span-8 md:col-span-3">

        </div>
        <div className="col-span-8 md:col-span-5 space-y-8">
          <p className="uppercase text-4xl md:text-7xl text-center">hey there <br /> i&apos;m <span className="text-secondary">selva!</span></p>
          <p className="uppercase text-2xl text-center">My name is Selva Al-ali, I&apos;m a 25 year old Graphic Designer from North East Syria.</p>
          <p className="uppercase text-2xl text-center">I am a Brand and Visual Identity Designer, diving into design just tow years ago, hoverer my skills broaden much further into all aspects of design; I&apos;m an all round creative as they might say.</p>
          <div className="w-full flex justify-center">
            <Link href="/about">
              <Button className="">More About me</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 mt-20 space-y-8 md:space-y-0">
        <div className="col-span-7 md:col-span-3 flex flex-col items-center gap-4">
          <h5 className="uppercase text-4xl md:text-7xl text-center center">
            check out my <span className='font-rony text-secondary'> recent</span> projects
          </h5>
          <Button>ALL PROJECTS</Button>
        </div>
        <div className="col-span-7 md:col-span-4 space-y-4">
          <div className="relative child:hover:rotate-0 child:transition-transform child:duration-500">
            <Image className="mx-auto md:absolute md:left-36 md:rotate-6 rounded-3xl" width='250' height='250' alt="nigga" src="/artmuse/1.jpg"/>
            <p className='text-center md:absolute md:left-24 md:top-40 md:rotate-6 text-3xl font-rony'>ART MUSE</p>
          </div>
          <div className="relative child:hover:rotate-0 child:transition-transform child:duration-500">
            <Image className="mx-auto transition-transform duration-500 md:absolute md:right-10 md:top-20 md:rotate-6 rounded-3xl" width='250' height='250' alt="nigga" src="/nibble/1.jpg"/>
            <p className='text-center md:absolute md:right-10 md:top-64 md:rotate-6 text-3xl font-rony'>NIBBLE</p>
          </div>
          <div className="relative child:hover:rotate-0 child:transition-transform child:duration-500">
            <Image className="mx-auto transition-transform duration-500 md:absolute md:left-56 md:top-72 md:-rotate-6 rounded-3xl" width='230' height='250' alt="nigga" src="/nava/1.jpg"/>
            <p className='text-center md:absolute md:left-80 md:top-[27.5rem] md:-rotate-6 text-3xl font-rony'>NAVA COSMETICS</p>
          </div>
        </div>
      </div>
      <div className="h-96"></div>
    </main>
  );
}
