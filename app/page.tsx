import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/socials";
import Photo from "@/components/photo";
import Stats from "@/components/stats";
const Home = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 mb-8 xl:mb-0 xl:gap-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="">Frontend developer</span>
            <h1 className="mb-6">Hello I'm <br /><span className="text-accent">Anwar Mestycer</span></h1>
            <p className="max-w-[680px] mb-9 text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus. In egestas laoreet feugiat. Nulla ac sagittis lacus. Proin vel blandit lectus, a varius sapien. 
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button className="text-xl uppercase flex items-center gap-2" variant="outline" size="lg">
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className="">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500  "/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0"> 
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
