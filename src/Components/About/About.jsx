import img_1 from '../../../public/Images/kids1.jpg'
import img_2 from '../../../public/Images/kidart.jpg'

const About = () => {
    return (
      <div className='px-4'>
        <h1 className='text-xl text-center font-bold mb-12'>About US</h1>
        <div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <p className='text-justify'>
                For Kids Co is a quality, affordable, before and after school
                club and holiday playscheme for children. At For Kids Co, your
                child will benefit from a caring, safe and supported environment
                to make new friends, learn and have fun. Our facility is fully
                self-contained with a fully operational kitchen, outdoor space
                for the children to play and our own forest garden, providing a
                stable, secure and relaxed environment where parents and carers
                feel satisfied to leave their children. With daily planned
                activities, facilitated by qualified and experienced staff, For
                Kids Co offers a wrap-around care service where children are
                stimulated and encouraged. Safeguarding is of utmost importance
                and all of our staff undergo full, enhanced DBS checks in line
                with our Ofsted registration.
              </p>
            </div>
            <div className="flex-1">
              <img src={img_1} alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 mt-10">
            <div className="flex-1">
              <img src={img_2} alt="" />
            </div>
            <div className='flex-1 text-justify'>
              <p>
                Healthy living is promoted and reflected in our menus and
                activities. You will be provided with a schedule of activities
                and a menu, ensuring that you are aware of what your child will
                be doing and eating throughout the week. We encourage input from
                parents and your suggestions are hugely appreciated through our
                For Kids Forum, where you will also be able to discuss ideas and
                make new friends with other parents.
              </p>
              <p>
                Ultimately, our aim is to help children develop their full
                potential through positive, social, emotional, physical and
                intellectual experiences by:
              </p>
              <ul>
                <li>
                  Maintaining high standards of childcare in which there is
                  provision for parents and carers to participate in the
                  planning of the scheme so that all feel a sense of adequacy
                  and fulfilment.
                </li>
                <li>
                  Valuing, recognising and respecting children and their
                  parents/carers that are from different backgrounds of race,
                  culture, or religion.
                </li>
                <li>
                  Recognising and respecting childrens individual needs e.g.
                  disabilities, faith and gender.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;