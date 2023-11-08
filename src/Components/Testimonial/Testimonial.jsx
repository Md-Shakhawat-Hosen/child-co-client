import Marquee from "react-fast-marquee";

const Testimonial = () => {
  return (
    <div>
        <h1 className="font-bold text-xl text-center my-10">Testimonials</h1>
      <Marquee>
        <div className="mr-6">
         
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                Happy kids, happy parents!
              </p>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                ` For Kids Co offer the most fantastic, flexible, reliable,
                caring, environment and my life simply wouldn’t work without
                them. The activities they offer are far superior to any other
                clubs I’ve used, taking the children out daily during the
                holidays on the sort of trips I’d love to take them on if I
                wasn’t working. `
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Micheal Gough
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  CEO at Next
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                Fantastic service!
              </p>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                ` What a fantastic place. I simply cannot recommend For Kids Co
                highly enough! My son always comes home with a smile on his face
                after playing with his new friends. The staff are diligent,
                friendly and I have always felt my child is in safe hands. Great
                stuff.
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://i.ibb.co/4MnZR9b/another.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Holand
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  Manager at ventures
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonial;
