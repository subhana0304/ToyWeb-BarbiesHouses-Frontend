import React from 'react';

const Testimonial = () => {
    return (
        <div className='w-100'>
            <section className="bg-white dark:bg-gray-900 w-100">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <h1 className='text-7xl text-[#FF8087]'>''</h1>
                        <blockquote>
                            <p className="text-2xl w-100 font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div class="pr-3 font-medium text-[#FF8087] dark:text-white">Micheal Gough</div>
                                    <div class="pl-3 text-sm font-light text-[#FF8087] dark:text-gray-400">CEO at Google</div>
                                </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;