import React from "react";
import Avatar from '../images/para_background.jpg'

// handles displaying information about me to the user
export default function Biography() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Roald André Kvarv.
                        <br className="hidden lg:inline-block" />I love to build amazing
                        apps & love programming with a passion.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a 4th year masters student at the University of Bergen (UiB) studying Information<br/>
                        Science. I am fascinated with the world of technology and development. I have gained<br/>
                        experience working on projects in varying levels of size & complexity. I enjoy learning<br/>
                        and exploring new technologies & techniques to develop innovative solutions. I am a believer<br/>
                        of collaboration, and i enjoy working together closely with others. <br/>
                    </p>
                    <div className="flex justify-center">
                        {/*<a*/}
                        {/*    href="#"*/}
                        {/*    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">*/}
                        {/*    Work With Me*/}
                        {/*</a>*/}
                        {/*<a*/}
                        {/*    href="#"*/}
                        {/*    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">*/}
                        {/*    See My Past Work*/}
                        {/*</a>*/}
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img style={{width:"10%", borderRadius:"50%"}}
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={Avatar}
                    />
                </div>
            </div>
        </section>
    );
}