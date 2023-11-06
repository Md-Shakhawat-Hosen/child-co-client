import img from "../../../public/Images/notFound.jpg"

const NotFound = () => {
    return (
        <div className='h-[70vh] flex items-center justify-center' >
            <img className="w-full" src={img} alt="" />
        </div>
    );
};

export default NotFound;