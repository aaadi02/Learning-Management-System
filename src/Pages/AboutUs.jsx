import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../assets/Images/aboutMainImage.png";
import apj from "../assets/Images/QuotesPersonalityImage/apj.png";
import bg from "../assets/Images/QuotesPersonalityImage/billGates.png";
import einstein from "../assets/Images/QuotesPersonalityImage/einstein.png";
import sj from "../assets/Images/QuotesPersonalityImage/steveJobs.png";
import nm from "../assets/Images/QuotesPersonalityImage/nelsonMandela.png";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 text-white flex flex-col">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the offordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their skills, creativity and knowledge to each
              other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>

          <div>
            <img id="test1" style={{ filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))" }} className="drop-shadow-2xl" src={aboutMainImage}alt="about image"/>
          </div>
        </div>

        <div className="carousel w-1/2 my-16 m-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col justify-center items-center gap-4 px-[15%]">
              <img src={apj} className="w-40 rounded-full border-2 border-gray-400"/>
              <p className="text-xl text-gray-200">{"Dream is not that which you see while sleeping it is something that does not let you sleep."}</p>
              <h3 className="text-2xl font-semibold">Dr. APJ Abdul Kalam</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide5" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col justify-center items-center gap-4 px-[15%]">
              <img src={nm} className="w-40 rounded-full border-2 border-gray-400"/>
              <p className="text-xl text-gray-200">{"Education is the most powerful tool you can use to change the world."}</p>
              <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col justify-center items-center gap-4 px-[15%]">
              <img src={einstein} className="w-40 rounded-full border-2 border-gray-400"/>
              <p className="text-xl text-gray-200">{"Try not to become a man of success. Rather become a man of value."}</p>
              <h3 className="text-2xl font-semibold">Sir Albert Einstein</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col justify-center items-center gap-4 px-[15%]">
              <img src={bg} className="w-40 rounded-full border-2 border-gray-400"/>
              <p className="text-xl text-gray-200">{"Most people overestimate what they can do in one year and underestimate what they can do in ten years."}</p>
              <h3 className="text-2xl font-semibold">Bill Gates</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col justify-center items-center gap-4 px-[15%]">
              <img src={sj} className="w-40 rounded-full border-2 border-gray-400"/>
              <p className="text-xl text-gray-200">{"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."}</p>
              <h3 className="text-2xl font-semibold">Steve Jobs</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;