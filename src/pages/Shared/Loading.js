import React from "react";

const Loading = () => {
    return (
        <div className="h-full mt-32 flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            <div className="ml-2 text-xl text-blue-700 font-bold animate-pulse">
                Loading...
            </div>
        </div>
    );
};

export default Loading;
