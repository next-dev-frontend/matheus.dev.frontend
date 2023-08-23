import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

const Projetos = () => {
  return (
    <section className="h-max py-2 max-w-3xl text-white bg-gray-200 rounded border-2 border-gray-400">
      <div className="flex flex-wrap mx-4">
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

      </div>
    </section>
  );
};

export default Projetos;