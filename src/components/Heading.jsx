

const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center space-y-2 my-8">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-xl font-thin mb-4">{subtitle}</p>
        </div>
    );
};

export default Heading;
