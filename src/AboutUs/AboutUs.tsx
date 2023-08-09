import "./AboutUs.css";
import bgFood from "../Assets/logo.jpg";

function AboutUs() {
  return (
    <div>
      <div className="top_aboutus py-20" id="aboutus">
        <div className="container mx-auto">
          <div className="lg:columns-3 md:columns-1 mx-6">
            <div className="about-text mt-12 md:mb-12">
              <h3 className="text-3xl text-white font-bold text-right">
                Tentang Kami
              </h3>
              <div className="about-left text-right leading-4 text-red-400	"></div>
              <p className="font-extralight text-slate-200 text-sm mt-2 text-right ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                cumque reprehenderit voluptates ullam, consequuntur qui aliquam!
                Ab exercitationem, non error optio illum animi laudantium omnis.
                Ad quas quod numquam ab!
              </p>
            </div>
            <div className="about_image w-3/4 mx-auto">
              <img
                src={bgFood}
                alt=""
                className="rounded-full lg:w-11/12 md:w-8/12 md:m-auto"
              />
            </div>
            <div className="about-text relative top-12 ">
              <h3 className="text-3xl text-white font-bold text-left">
                Sejarah Kami
              </h3>
              <div className="about-right text-left leading-4 text-red-300	"></div>

              <p className="font-extralight text-slate-200 text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                cumque reprehenderit voluptates ullam, consequuntur qui aliquam!
                Ab exercitationem, non error optio illum animi laudantium omnis.
                Ad quas quod numquam ab!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
