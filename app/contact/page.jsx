


export const metadata = {
  title: "Contact",
  description: "Generated by create next app",
};

export default function Contact() {
  return (
    <div className="relative border-2 border-black mt-[200px]">
      <div className="relative w-full h-[300px] -mt-[80px]">
        <img 
          src="/assets/itachi.jpg" 
          alt="n" 
          className="h-full w-full object-cover brightness-110 contrast-105"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-[20px] uppercase bg-black/60 px-4 py-2 w-fit whitespace-nowrap mb-2">
            Got a Brilliant Idea to Transform?
          </h2>
          <h1 className="text-[50px] uppercase font-bold bg-black/60 px-4 py-2 w-fit whitespace-nowrap mb-4">
            Let's Work Together
          </h1>

        
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white bg-black text-white px-6 py-3 rounded-[90px] flex items-center gap-3"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
