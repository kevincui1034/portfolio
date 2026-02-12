import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import { FiDownload } from "react-icons/fi";
import { FiLinkedin} from "react-icons/fi";
import { FiGithub} from "react-icons/fi";


const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-[12px] text-accent uppercase tracking-[2px]">Based in San Jose</span>
            <h1 className="h1 mb-6 text-6xl font-bold">
              Kevin Cui<br /> <span className="text-accent"> Data Scientist</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a data scientist with a passion for building data-driven solutions to real-world problems.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="md" className="uppercase flex items-center gap-2 text-accent">Download CV
                <FiDownload className="text-xl"/>
              </Button>  
              <div className="mb-8 xl:mb-0">
              <Social
              containerStyles="flex gap-4"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>    
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
