import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center justify-center mb-8">
      <Image 
        src="/logo.png" 
        alt="The Phoenixx Club" 
        width={50} 
        height={50} 
        className="mr-3"
      />
      <div>
        <h1 className="text-2xl font-bold text-[#ffb74d]">
          Phoenixx Club
        </h1>
        <p className="text-sm text-gray-600">Luxury, Laughter and Legacy</p>
      </div>
    </div>
  );
} 