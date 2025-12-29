import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-8 font-sans">
      <main className="w-full max-w-5xl">
        <h1 className="text-6xl font-bold text-[#333333] mb-12">
          Tentang - <br />
          Kami
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/3">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-2/3 flex flex-col justify-start pt-4">
            <div>
              <span className="inline-block bg-[#333333] text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
                Tentang Kami
              </span>
            </div>

            <p className="text-[#333333] leading-relaxed mb-12 text-sm md:text-base max-w-2xl">
              Kami ( Ramsi Mulya Wicaksana, Nayaka Apta Rabbani, Raka Adi Surya
              Prasetya ) sedang mengerjakan tugas KDMO, dimana tugasnya adalah
              membuat ui/ux tentang kami dan di upload di github.
            </p>

            <div className="flex gap-16">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-black mb-1">3</span>
                <span className="text-sm text-gray-600">Anggota</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-black mb-1">1</span>
                <span className="text-sm text-gray-600">Ketua</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-black mb-1">
                  10000
                </span>
                <span className="text-sm text-gray-600">Proyek Tuntas</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
