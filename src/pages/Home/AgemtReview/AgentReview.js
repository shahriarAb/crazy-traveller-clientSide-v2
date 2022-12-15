import React from "react";
import agent1 from "../../../images/agent-1.jpg";
import agent2 from "../../../images/agent-2.jpg";
import agent3 from "../../../images/agent-3.jpg";

const AgentReview = () => {
    return (
        <div className="text-center lg:mx-8 my-28">
            <p
                style={{ fontFamily: "Dancing Script, cursive" }}
                className="text-red-400 text-xl font-semibold"
            >
                Our Promises
            </p>
            <h2 className="text-4xl font-extrabold">OUR AGENT SAYS</h2>
            <div className="mt-8 lg:flex">
                <div className="grid justify-items-center mx-2 border-2 bg-gradient-to-r from-red-50 to-red-200 border-red-300 rounded-lg pb-4 mb-4">
                    <article className="mt-4 px-4 text-center text-lg text-gray-500">
                        No matter where you plan to travel, make sure you check
                        the Travel Advice and Advisories page for your
                        destination twice: once when you are planning your trip.
                    </article>
                    <img
                        className="mt-6"
                        style={{
                            border: "4px solid rgb(255, 99, 71)",
                            borderRadius: "50%",
                        }}
                        width="100px"
                        src={agent1}
                        alt=""
                    />
                    <p className="text-red-500 text-2xl font-bold italic">
                        Jhonny Alkins
                    </p>
                    <small className="text-gray-500 italic">Travel Agent</small>
                </div>
                <div className="grid justify-items-center mx-2 border-2 bg-gradient-to-r from-red-50 to-red-200 border-red-300 rounded-lg pb-4 mb-4">
                    <article className="mt-4 px-4 text-center text-lg text-gray-500">
                        Make sure you check the Travel Advice and Advisories
                        page for your destination twice: once when you are
                        planning your trip, and again shortly before you leave.
                    </article>
                    <img
                        className="mt-6"
                        style={{
                            border: "4px solid rgb(255, 99, 71)",
                            borderRadius: "50%",
                        }}
                        width="100px"
                        src={agent2}
                        alt=""
                    />
                    <p className="text-red-500 text-2xl font-bold italic">
                        Willian Smith
                    </p>
                    <small className="text-gray-500 italic">Travel Agent</small>
                </div>
                <div className="grid justify-items-center mx-2 border-2 bg-gradient-to-r from-red-50 to-red-200 border-red-300 rounded-lg pb-4 mb-4">
                    <article className="mt-4 px-4 text-center text-lg text-gray-500">
                        {" "}
                        again shortly before you leave. Safety and security
                        conditions may change between the date you book your
                        travel and your departure date.
                    </article>
                    <img
                        className="mt-6"
                        style={{
                            border: "4px solid rgb(255, 99, 71)",
                            borderRadius: "50%",
                        }}
                        width="100px"
                        src={agent3}
                        alt=""
                    />
                    <p className="text-red-500 text-2xl font-bold italic">
                        Margarita Wagner
                    </p>
                    <small className="text-gray-500 italic">Travel Agent</small>
                </div>
            </div>
        </div>
    );
};

export default AgentReview;
