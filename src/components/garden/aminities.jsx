'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const amenities = [
  { title: <>Open <br />Gymnasium</>, subtitle: 'Stay active every day', icon: '/assets/gardens/am-1.svg' },
  { title: <>Jogging<br /> Track</>, subtitle: 'Scenic shaded loop', icon:  '/assets/gardens/am-2.svg' },
  { title: <>Adults <br /> Swimming Pool</>, subtitle: 'Laps with skyline views', icon:  '/assets/gardens/am-3.svg' },
  { title: <>Pedal<br /> Tennis</>, subtitle: 'Friendly competition', icon:  '/assets/gardens/am-4.svg' },
  { title: <>Outdoor<br /> Kids Play Area</>, subtitle: 'Safe and imaginative', icon:  '/assets/gardens/am-5.svg' },
  { title: <>And Many<br /> Others</>, subtitle: 'Lifestyle extras', icon:  '/assets/gardens/am-6.svg' },
];

export default function LuxuryAmenities() {
  return (
    <section className="relative isolate overflow-hidden  text-white px-4  py-10 sm:px-8"  style={{
        backgroundImage:'url(/assets/gardens/aminities.png)',
        backgroundSize:'cover'
        }}>
      <div
        className="absolute inset-0 opacity-40"
       
      />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-7xl font-semibold tracking-tight">
          Luxury Aminities
        </h2>

        <div className="mt-10 grid grid-cols-2  md:grid-cols-3">
          {amenities.map((amenity) => (
            <article
              key={amenity.title}
              className="flex flex-col items-center gap-2 rounded-lg   px-2 py-4 text-center transition hover:bg-gradient-to-br hover:from-white/20 hover:to-transparent"
            >
              <Image src={amenity.icon} className="text-2xl " height={50} width={50} />
              <h3 className="text-xl ">{amenity.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}