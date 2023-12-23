import Team from "@/components/team";
import About from "@/components/about";
import PreviousEvents from "@/components/previousEvents";
import Speakers from "@/components/speakers";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="space-y-28">
      <div className="flex my-10 flex-col justify-center items-center">
        <div className=" flex flex-col md:flex-row space-x-10 space-y-10 p-4">
          <div className="  flex justify-center items-center">
            <img src="logo.png" alt="" className="md:w-full w-80" />
          </div>
          <div className="  flex flex-col space-y-6 justify-center  md:items-left">
            <p className="md:text-4xl text-3xl ">Get ready to Explore </p>
            <p className="md:text-6xl text-3xl ">Unknown Career Fields</p>
          </div>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 hover:scale-110 transition-transform rounded-full text-lg">
          Get Tickets
        </button>
      </div>

      <section id="About">
        <div className="mb-20 h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-80 h-full bg-green-500" />
        </div>
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-5xl m-4 mb-2 sm:mb-0">
          About
        </h1>
        <p className="m-8 leading-relaxed text-xl ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti debitis quisquam nihil dolor magnam similique qui dignissimos suscipit, culpa fuga id soluta, iure voluptates odio nobis molestias quia minus eligendi porro ea asperiores sunt impedit iusto! Soluta, quo culpa consequatur atque saepe excepturi dignissimos, voluptas placeat, voluptatum asperiores ipsa. A illum rerum error repudiandae voluptates asperiores! Quaerat aspernatur quos eligendi commodi voluptatum qui ratione nulla ex maiores non accusamus iusto cumque, tempore possimus deleniti minus ipsa, inventore perferendis?.</p>
      </section>

      <section id="Organizers">
        <div className="mb-20 h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-80 h-full bg-green-500" />
        </div>
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-5xl m-4 mb-2 sm:mb-0">
          Organizers
        </h1>
        <Team />
      </section>
      <section id="PreviousEvents">
        <div className="mb-20 h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-80 h-full bg-green-500" />
        </div>
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-5xl m-4 mb-2 sm:mb-0">
          Previous Events
        </h1>
        <PreviousEvents/>
      </section>
      <section id="PreviousEvents">
        <div className="mb-20 h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-80 h-full bg-green-500" />
        </div>
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-5xl m-4 mb-2 sm:mb-0">
          Speakers
        </h1>
        <Speakers/>
      </section>
      <section id="Speakers">
        <div className="mb-20 h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-80 h-full bg-green-500" />
        </div>
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-5xl m-4 mb-2 sm:mb-0">
          Contact us
        </h1>
        <Contact/>
      </section>
    </div>
  );
}
