import PropTypes from "prop-types";

const BackgroundBlobs = ({ variant = 1 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variant === 1 ? (
        <>
          <div
            className="absolute -top-40 -right-32 w-72 h-72 sm:w-96 sm:h-96 
                       bg-gradient-to-tr from-[#6E3EF4] to-[#409AFF] 
                       rounded-full mix-blend-multiply filter blur-3xl 
                       opacity-40 animate-pulse-slow"
          ></div>
          <div
            className="absolute -bottom-48 -left-40 w-80 h-80 sm:w-96 sm:h-96 
                     bg-gradient-to-bl from-[#409AFF] to-[#6E3EF4] 
                     rounded-full mix-blend-multiply filter blur-2xl 
                     opacity-50 animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </>
      ) : (
        <>
          <div
            className="absolute -top-56 -left-32 w-64 h-64 sm:w-80 sm:h-80 
                       bg-gradient-to-br from-[#6E3EF4] via-[#409AFF] to-[#6E3EF4] 
                       rounded-full mix-blend-multiply filter blur-2xl 
                       opacity-30 animate-pulse-slow"
          ></div>
          <div
            className="absolute -bottom-40 -right-40 w-96 h-96 sm:w-[28rem] sm:h-[28rem] 
                     bg-gradient-to-tr from-[#409AFF] to-[#6E3EF4] 
                     rounded-full mix-blend-multiply filter blur-3xl 
                     opacity-45 animate-pulse-slow"
            style={{ animationDelay: "3s" }}
          ></div>
        </>
      )}
    </div>
  );
};

export default BackgroundBlobs;

BackgroundBlobs.propTypes = {
  variant: PropTypes.number
}
