import React from 'react';
import post1 from '../../../images/post-1.jpg';
import post2 from '../../../images/post-2.jpg';
import post3 from '../../../images/post-3.jpg';

const Posts = () => {
    return (
        <div className="text-center my-28 lg:px-20">
            <h2 style={{ fontFamily: 'Dancing Script, cursive' }} className="text-xl font-semibold text-red-400">From Our Blog</h2>
            <p className="text-4xl font-extrabold">OUR RECENT POSTS</p>

            {/* card-1 */}
            <div className="mt-10 w-full lg:max-w-full lg:flex shadow-md">
                <div className="h-48 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${post1})` }} title="Mountain">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 flex items-center">
                            <i className="far fa-clock mr-2"></i>
                            Aug 31 2021
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">Life is a beautiful journey not a destination</div>
                        <p className="text-gray-700 text-base">Two weeks post- op and Cory went to see his doctor. Well, kind of….he passed him at the work station….enough to share greetings. Don’t you think he should be called Dr. Hunky? Oh-la-la. Cory was actually seen by his Physician Assistant, Christa. She plays an important role in this whole process….after the doctor performed the surgery, it was Christa who put Patient Cory back together again with her handiwork.</p>
                    </div>
                    <div>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nature</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#autumn</span>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src={post1} alt="" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none font-bold">John Smith</p>
                            <p className="text-gray-600">Member</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* card-3 */}
            <div className="mt-10 w-full lg:max-w-full lg:flex shadow-md">
                <div className="h-48 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${post2})` }} title="Mountain">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 flex items-center">
                            <i className="far fa-clock mr-2"></i>
                            Aug 29, 2021
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">Take only memories, leave only footprints</div>
                        <p className="text-gray-700 text-base">A journey into our literary heritage Astrid Lindgren was a Swedish author who mainly wrote children stories. She wrote stories about Pippi Longstocking, Emil of Lönneberga, Karlsson-on-the-Roof, the Six Bullerby Children and many more. Many of the stories Astrid Lindgren wrote are so well known in Sweden that virtually everybody know about them.</p>
                    </div>
                    <div>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src={post3} alt="" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none font-bold">John Smith</p>
                            <p className="text-gray-600">Member</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* card-3 */}
            <div className="mt-10 w-full lg:max-w-full lg:flex shadow-md">
                <div className="h-48 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${post3})` }} title="Mountain">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 flex items-center">
                            <i className="far fa-clock mr-2"></i>
                            June 30, 2021
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">Journeys are best measured in new friends</div>
                        <p className="text-gray-700 text-base">I still believe, in spite of everything, that people are truly good at heart.” Anne Frank Considering what Anne Frank and her family, and hundreds of thousands of other Dutch Jews, went through during the Nazi occupation of the Netherlands in World War II, I’ve always thought it amazing that she still believed that people were good at heart. But more on that later. First, our flight and arrival in Amsterdam!</p>
                    </div>
                    <div>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#friendz</span>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src={post1} alt="" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none font-bold">Rebekka Subah</p>
                            <p className="text-gray-600">Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Posts;