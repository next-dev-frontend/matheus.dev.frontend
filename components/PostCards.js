import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

const PostCards = () => {
  return (
    <section className="container mx-auto w-full max-w-5xl px-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-2/3">
          <div className="mx-auto mb-12 max-w-full text-center lg:mb-20 p-8">
            <h2 className="mb-4 text-[#142039] font-bold text-4xl sm:text-5xl md:text-6xl">
              Recent Tips and News About Insurances
            </h2>
            <p className="text-body-color text-base py-4 text-2xl sm:text-3xl md:text-4xl">
              Stay on top of current information about the insurance market. Know well before investing in your insurance.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full p-2 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-sm">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="/cards/post-card1.webp"
                alt="insurances template img"
                width={1240}
                height={820}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>
                <Link href="#" passHref className="underline font-bold hover:text-primary mb-4 block text-2xl font-semibold sm:text-3xl">
                  Meet AutoManage, the best AI management tools
                </Link>
              </h3>
              <p className="text-body-color text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-2 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-sm">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="/cards/post-card4.webp"
                alt="insurances template img"
                width={1240}
                height={820}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>
                <Link href="#" passHref className="underline font-bold hover:text-primary mb-4 block text-2xl font-semibold sm:text-3xl">
                  What makes a car totaled?
                </Link>
              </h3>
              <p className="text-body-color text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-2 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-sm">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="/cards/post-card3.webp"
                alt="insurances template img"
                width={1240}
                height={820}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>
                <Link href="#" passHref className="underline font-bold hover:text-primary mb-4 block text-2xl font-semibold sm:text-3xl">
                  The no-fuss guide to upselling and cross-selling
                </Link>
              </h3>
              <p className="text-body-color text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-2 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-sm">
            <div className="relative mb-8 overflow-hidden rounded-lg">
              <Image
                src="/cards/post-card2.webp"
                alt="insurances template img"
                width={1240}
                height={820}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>
                <Link href="#" passHref className="underline font-bold hover:text-primary mb-4 block text-2xl font-semibold sm:text-3xl">
                  The no-fuss guide to upselling and cross-selling
                </Link>
              </h3>
              <p className="text-body-color text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCards;