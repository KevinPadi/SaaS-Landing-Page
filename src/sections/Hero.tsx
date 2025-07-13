import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={designExample1Image} alt="Design example 1 image" />
        </div>
        <div className="absolute -right-64 top-16 hidden lg:block">
          <Image src={designExample2Image} alt="Design example 1 image" />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Andrea" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Bryan" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">
          Imptactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn't slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>

        <form className="mx-auto max-w-lg mt-8">
          <label
            htmlFor="sign-up"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="sign-up"
              className="block w-full p-4 text-sm border border-white/15 rounded-full bg-transparent focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
            <Button
              type="submit"
              className="absolute end-1.5 bottom-1.5 -translate-y-px"
              variant="primary"
              size="sm"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
