import React from "react"
import "./base.css"

const index = () => {
  return (
    <>
      <div className="bg-white dark:bg-[#090e1a]">
        <header className="astro-ESKEKC2M">
          <nav className="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent astro-ESKEKC2M">
            <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
              <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4 astro-ESKEKC2M">
                <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max astro-ESKEKC2M">
                  <a
                    href="/#home"
                    aria-label="logo"
                    className="flex items-center space-x-2 astro-ESKEKC2M"
                  >
                    <img
                      src={
                        "https://drive.google.com/uc?export=download&id=1aprDE8LfZizejO9y306FZx8CAuq8BX0D"
                      }
                      alt=""
                      className="w-16 h-16"
                    />
                  </a>
                  <div className="relative flex max-h-10 items-center lg:hidden astro-ESKEKC2M">
                    <button
                      aria-label="humburger"
                      id="hamburger"
                      className="relative -mr-6 p-6 astro-ESKEKC2M"
                    >
                      <div
                        aria-hidden="true"
                        id="line"
                        className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 astro-ESKEKC2M"
                      />
                      <div
                        aria-hidden="true"
                        id="line2"
                        className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 astro-ESKEKC2M"
                      />
                    </button>
                  </div>
                </div>
                <div
                  id="navLayer"
                  aria-hidden="true"
                  className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden astro-ESKEKC2M"
                />
                <div
                  id="navlinks"
                  className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none astro-ESKEKC2M"
                >
                  <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0 astro-ESKEKC2M">
                    <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm astro-ESKEKC2M">
                      <li className="astro-ESKEKC2M">
                        <a
                          href="/#features"
                          className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ESKEKC2M"
                        >
                          <span className="astro-ESKEKC2M">Features</span>
                        </a>
                      </li>
                      <li className="astro-ESKEKC2M">
                        <a
                          href="/#solution"
                          className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ESKEKC2M"
                        >
                          <span className="astro-ESKEKC2M">Solution</span>
                        </a>
                      </li>
                      <li className="astro-ESKEKC2M">
                        <a
                          href="/#reviews"
                          className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ESKEKC2M"
                        >
                          <span className="astro-ESKEKC2M">Reviews</span>
                        </a>
                      </li>
                      <li className="astro-ESKEKC2M">
                        <a
                          href="/#pricing"
                          className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ESKEKC2M"
                        >
                          <span className="astro-ESKEKC2M">Pricing</span>
                        </a>
                      </li>
                      <li className="astro-ESKEKC2M">
                        <a
                          href="/login"
                          className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ESKEKC2M"
                        >
                          <span className="astro-ESKEKC2M">Login</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 lg:mt-0 astro-ESKEKC2M">
                    <a
                      href="/register"
                      className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max astro-ESKEKC2M"
                    >
                      <span className="relative text-sm font-semibold text-white rounded-xl px-4 py-2 bg-blue-500 astro-ESKEKC2M">
                        {" "}
                        Get Started
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="mb-40">
          <div
            className="relative overflow-hidden dark:bg-darker lg:overflow-auto"
            id="home"
          >
            <div className="absolute inset-x-0 top-32 lg:hidden">
              <div
                aria-hidden="true"
                className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-6xl"
              >
                <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700" />
                <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600" />
              </div>
            </div>
            <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
              <div className="relative ml-auto pt-40 xl:pt-36">
                <div className="gap-12 md:flex md:items-center">
                  <div className="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
                    <h1 className="text-5xl font-black dark:text-white md:text-6xl xl:text-7xl">
                      Business management made easy
                    </h1>
                    <div className="">
                      <p className="mt-8 text-lg text-gray-700 dark:text-gray-100">
                        Odio incidunt nam sit illum. Voluptas doloribus
                        asperiores quaerat aperiam. Quidem harum omnis beatae
                        ipsum soluta!
                      </p>
                      <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                        <a
                          href="/register"
                          className="before:bg-blue-500 astro-Z4ZYBUMP"
                        >
                          <span className="text-white outline-none rounded-xl border px-6 py-3 bg-blue-500 astro-Z4ZYBUMP">
                            Get started
                          </span>
                        </a>
                        <a
                          href="#solution"
                          className="before:border before:border-transparent before:bg-primary/10 dark:before:border-gray-700 dark:before:bg-gray-800 astro-Z4ZYBUMP"
                        >
                          <span className="text-primary rounded-xl  border px-6 py-3 dark:text-white astro-Z4ZYBUMP">
                            Learn more
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5">
                    <div className="-ml-6 md:-mr-72 lg:mr-0">
                      <img
                        className="h-[400px] object-cover object-center rounded-xl"
                        src={
                          "https://drive.google.com/uc?export=download&id=1l0tujFk-60TMBpoM6IONEEbF7_t8VnCV"
                        }
                        alt="app screenshot"
                        width={1628}
                        height={1233}
                      />
                      <img
                        className="hidden h-full object-cover object-left dark:block"
                        src={
                          "https://drive.google.com/uc?export=download&id=1l0tujFk-60TMBpoM6IONEEbF7_t8VnCV"
                        }
                        alt="app screenshot"
                        width={1628}
                        height={1233}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16">
                  <span className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">
                    TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES
                  </span>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
                    <img
                      className="h-8 w-auto lg:h-14"
                      src="images/clients/airbnb.svg"
                      loading="lazy"
                      alt="airbnb"
                      width={100}
                      height=""
                    />
                    <img
                      className="h-6 w-auto lg:h-10"
                      src="images/clients/google.svg"
                      loading="lazy"
                      alt="bissell"
                      width={100}
                      height=""
                    />
                    <img
                      className="h-6 w-auto lg:h-10"
                      src="images/clients/ge.svg"
                      loading="lazy"
                      alt="ge"
                      width={100}
                      height={100}
                    />
                    <img
                      className="h-6 w-auto lg:h-10"
                      src="images/clients/netflix.svg"
                      loading="lazy"
                      alt="lilly"
                      width={100}
                      height={100}
                    />
                    <img
                      className="h-8 w-auto lg:h-14"
                      src="images/clients/microsoft.svg"
                      loading="lazy"
                      alt="microsoft"
                      width={100}
                      height=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative pt-32 md:pt-44" id="features">
            <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
              <div className="mx-auto md:w-3/5">
                <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                  Shaped to meet your needs
                </h2>
                <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                  apiente optio repellendus atque illum odio! Fugiat at expedita
                  deserunt dolorum molestias.
                </p>
              </div>
              <div className="mt-16 md:mt-20">
                <div className="relative grid rounded-3xl border border-gray-200 p-1 dark:border-gray-800 lg:grid-cols-2">
                  <div className="absolute inset-0 hidden h-max dark:block lg:my-auto">
                    <div
                      aria-hidden="true"
                      className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl"
                    >
                      <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700" />
                      <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8">
                      <img
                        className="w-16"
                        src="./images/xp.webp"
                        alt="xp icon illustration"
                        width={512}
                        height={512}
                        loading="lazy"
                      />
                      <div className="mx-auto text-center sm:w-2/5">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                          User centred
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Dolorem aliquid officiis quae ipsum nobis libero alias
                          Iure nobis dicta.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 dark:bg-gray-800/50 sm:grid-cols-2">
                    <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
                      <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Security first
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Dolorem aliquid officiis quae ipsum nobis libero alias
                          Iure nobis dicta.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
                      <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Simple Payment
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Dolorem aliquid officiis quae ipsum nobis libero alias
                          Iure nobis dicta.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
                      <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Fast speed
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Dolorem aliquid officiis quae ipsum nobis libero alias
                          Iure nobis dicta.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none">
                      <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Search engine
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Dolorem aliquid officiis quae ipsum nobis libero alias
                          Iure nobis dicta.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-32 md:pt-44" id="solution">
            <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
              <div className="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
                <div className="relative ml-auto h-full md:w-1/2">
                  <img
                    className="dark:hidden"
                    src="./images/milestone.webp"
                    alt="app milestone"
                    width={1174}
                    height={1134}
                  />
                  <img
                    className="hidden dark:block"
                    src="./images/milestone-dark.webp"
                    alt="app milestone"
                    width={1174}
                    height={1134}
                  />
                </div>
                <div className="md:w-1/2 lg:w-[47%]">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                    Just focus on your business startegy
                  </h2>
                  <p className="my-12 text-gray-600 dark:text-gray-300">
                    Nobis minus voluptatibus pariatur dignissimos libero quaerat
                    iure expedita at? Asperiores nemo possimus nesciunt dicta
                    veniam aspernatur quam mollitia. <br />
                    <br /> Vitae error, quaerat officia delectus voluptatibus
                    explicabo quo pariatur impedit, at reprehenderit aliquam a
                    ipsum quas voluptatem. Quo pariatur asperiores eum amet.
                  </p>
                  <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
                    <div className="mt-8 flex gap-4 md:items-center">
                      <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="m-auto h-6 w-6 text-gray-700 dark:text-gray-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                          />
                        </svg>
                      </div>
                      <div className="w-5/6">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                          Chat Anytime
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Asperiores nemo possimus nesciunt quam mollitia.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4 md:items-center">
                      <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="m-auto h-6 w-6 text-gray-700 dark:text-gray-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </div>
                      <div className="w-5/6">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                          Real Time Location
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Asperiores nemo possimus nesciunt quam mollitia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-20 md:my-32">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:w-2/3 md:text-3xl lg:text-4xl">
                  Customize your customer experience, Go beyond with our top
                  products
                </h3>
                <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <img
                        className="w-10"
                        src="./images/security.webp"
                        alt="safety icon illustration"
                        height={512}
                        width={512}
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Safelus
                        </h4>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Dolorem aliquid officiis quae ipsum nobis libero alias
                          Iure nobis dicta.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <img
                        className="w-10"
                        src="./images/card.webp"
                        alt="payment card icon illustration"
                        height={512}
                        width={512}
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Paylus
                        </h4>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Dolorem aliquid officiis quae ipsum nobis libero alias
                          Iure nobis dicta.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <img
                        className="w-10"
                        src="./images/xp.webp"
                        alt="xp icon illustration"
                        height={512}
                        width={512}
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          TL Certification
                        </h4>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                          Dolorem aliquid officiis quae ipsum nobis libero alias
                          Iure nobis dicta.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex flex-col items-center gap-6 sm:w-4/5 md:w-full md:flex-row lg:gap-12">
                <div className="relative md:w-1/2">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40 dark:opacity-60"
                  >
                    <div className="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700" />
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px] dark:to-indigo-600" />
                  </div>
                  <img
                    className="relative dark:hidden"
                    src="./images/illus.webp"
                    alt="stats illustration"
                    width={1746}
                    height={1746}
                  />
                  <img
                    className="relative hidden dark:block"
                    src="./images/illus-dark.webp"
                    alt="stats illustration"
                    width={1746}
                    height={1746}
                  />
                </div>
                <div className="ml-auto h-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
                    Go beyond with our top products
                  </h3>
                  <p className="my-12 text-gray-600 dark:text-gray-300">
                    Nobis minus voluptatibus pariatur dignissimos libero quaerat
                    ? Asperiores nemo possimus nesciunt dicta veniam aspernatur
                    quam mollitia. <br />
                    <br /> Vitae error, quaerat officia delectus voluptatibus
                    explicabo quo pariatur impedit, at reprehenderit aliquam a
                    ipsum quas voluptatem. Quo pariatur asperiores eum amet.
                  </p>
                  <a
                    href="/register"
                    className="before:bg-primary astro-Z4ZYBUMP"
                  >
                    <span className="text-white astro-Z4ZYBUMP">
                      Get started
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pt-32 text-gray-600 dark:text-gray-300 md:pt-20"
            id="reviews"
          >
            <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
              <div className="mx-auto md:w-3/5">
                <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                  Trusted by thousands
                </h2>
                <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                  Repellendus atque illum odio! Fugiat at expedita deserunt
                  dolorum molestias.
                </p>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <div className="flex gap-4">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/avatars/avatar.webp"
                          alt="user avatar"
                          width={400}
                          height={400}
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                            Daniella Doe
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            Mobile dev
                          </p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum aliquid quo eum quae quos illo earum ipsa
                        doloribus nostrum minus libero aspernatur laborum cum, a
                        suscipit, ratione ea totam ullam! Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Architecto
                        laboriosam deleniti aperiam ab veniam sint non cumque
                        quis tempore cupiditate. Sint libero voluptas veniam at
                        reprehenderit, veritatis harum et rerum.
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <div className="flex gap-4">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/avatars/avatar-1.webp"
                          alt="user avatar"
                          width={400}
                          height={400}
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                            Daniella Doe
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            @hundler
                          </p>
                        </div>
                      </div>
                      <p>
                        Illum aliquid quo eum quae quos illo laboriosam deleniti
                        aperiam ab veniam sint non cumque quis tempore
                        cupiditate. Sint libero voluptas veniam at
                        reprehenderit, veritatis harum et rerum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <div className="flex gap-4">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/avatars/avatar-1.webp"
                          alt="user avatar"
                          width={400}
                          height={400}
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                            Daniella Doe
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            Mobile dev
                          </p>
                        </div>
                      </div>
                      <p>
                        Nostrum minus libero sit amet consectetur, adipisicing
                        elit ab veniam sint non cumque quis tempore cupiditate.
                        Sint libero voluptas veniam at reprehenderit, veritatis
                        harum et rerum.
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <div className="flex gap-4">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/avatars/avatar-3.webp"
                          alt="user avatar"
                          width={400}
                          height={400}
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                            Daniella Doe
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            Mobile dev
                          </p>
                        </div>
                      </div>
                      <p>
                        Nostrum minus libero sit amet consectetur, adipisicing
                        elit ab veniam sint non cumque quis tempore cupiditate.
                        Sint libero voluptas veniam at reprehenderit, veritatis
                        harum et rerum.
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <div className="flex gap-4">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/avatars/avatar-2.webp"
                          alt="user avatar"
                          width={400}
                          height={400}
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                            Daniella Doe
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            @hundler
                          </p>
                        </div>
                      </div>
                      <p>
                        Illum aliquid quo eum quae quos illo laboriosam deleniti
                        aperiam ab veniam sint non cumque quis tempore
                        cupiditate. Sint libero voluptas veniam at
                        reprehenderit, veritatis harum et rerum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 sm:hidden lg:block">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <div className="flex gap-4">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/avatars/avatar.webp"
                          alt="user avatar"
                          width={400}
                          height={400}
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                            Daniella Doe
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            Mobile dev
                          </p>
                        </div>
                      </div>
                      <p>
                        Architecto laboriosam. Sint libero voluptas veniam at
                        reprehenderit, veritatis harum et rerum.
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <div className="flex gap-4">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/avatars/avatar-4.webp"
                          alt="user avatar"
                          width={400}
                          height={400}
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                            Daniella Doe
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            @hundler
                          </p>
                        </div>
                      </div>
                      <p>
                        Illum aliquid quo deleniti aperiam ab veniam sint non
                        cumque quis tempore cupiditate. Sint libero voluptas
                        veniam at reprehenderit, veritatis harum et rerum.
                      </p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                    <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                      <div className="flex gap-4">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/avatars/avatar.webp"
                          alt="user avatar"
                          width={400}
                          height={400}
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                            Daniella Doe
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            @hundler
                          </p>
                        </div>
                      </div>
                      <p>
                        Illum aliquid quo deleniti aperiam ab veniam Sint libero
                        voluptas veniam at reprehenderit, veritatis harum et
                        rerum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative pt-32 md:pt-44" id="pricing">
            <div
              aria-hidden="true"
              className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80"
            >
              <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700" />
              <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600" />
            </div>
            <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
              <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                  Start managing your company smarter today
                </h2>
              </div>
              <div className="mt-12 md:mt-20">
                <div className="relative rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/20 transition duration-500 dark:border-white/10 dark:bg-gray-900 dark:shadow-none">
                  <div className="flex flex-col gap-12 divide-y p-12 dark:divide-gray-800 md:flex-row md:divide-y-0 md:divide-x">
                    <div className="text-center md:w-5/12">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Suite Enterprise
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        For your company of any size
                      </p>
                      <span className="mb-6 mt-12 inline-block text-6xl font-bold text-gray-900 dark:text-white">
                        <span className="text-4xl text-primary dark:text-gray-200">
                          $
                        </span>
                        234
                      </span>
                      <div className="flex justify-center">
                        <a
                          href="/register"
                          className="before:bg-primary astro-Z4ZYBUMP"
                          type="button"
                        >
                          <span className="text-white astro-Z4ZYBUMP">
                            Get started
                          </span>
                        </a>
                      </div>
                      <p className="mt-12 text-sm text-gray-500 dark:text-gray-400">
                        Includes : Security, Unlimited Storage, Payment, Search
                        engine, and all features
                      </p>
                    </div>
                    <div className="relative md:w-7/12 md:pl-12">
                      <ul
                        role="list"
                        className="space-y-4 py-6 text-gray-600 dark:text-gray-300"
                      >
                        <li className="space-x-2">
                          <span className="font-semibold text-primary dark:text-gray-300">
                            ✓
                          </span>
                          <span>First premium advantage</span>
                        </li>
                        <li className="space-x-2">
                          <span className="font-semibold text-primary dark:text-gray-300">
                            ✓
                          </span>
                          <span>Second advantage weekly</span>
                        </li>
                        <li className="space-x-2">
                          <span className="font-semibold text-primary dark:text-gray-300">
                            ✓
                          </span>
                          <span>Third advantage donate to project</span>
                        </li>
                        <li className="space-x-2">
                          <span className="font-semibold text-primary dark:text-gray-300">
                            ✓
                          </span>
                          <span>Fourth, access to all components weekly</span>
                        </li>
                      </ul>
                      <p className="text-gray-700 dark:text-white">
                        Team can be any size, and you can add or switch members
                        as needed. Companies using our platform include:
                      </p>
                      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 grayscale">
                        <img
                          className="h-8 w-auto lg:h-12"
                          src="images/clients/airbnb.svg"
                          width={100}
                          alt="airbnb"
                        />
                        <img
                          className="h-6 w-auto lg:h-8"
                          src="images/clients/netflix.svg"
                          width={100}
                          alt="bissell"
                        />
                        <img
                          className="h-8 w-auto lg:h-10"
                          src="images/clients/ge.svg"
                          width={100}
                          height={100}
                          alt="ge"
                        />
                        <img
                          className="ww-auto h-8 lg:h-12"
                          src="images/clients/microsoft.svg"
                          width={100}
                          alt="microsoft"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 flex flex-col gap-12 md:mt-32 lg:flex-row">
                <div className="text-center lg:w-5/12 lg:pl-12 lg:text-left">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl">
                    Frequently Asqued Questions
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    piente optio repellendus atque illum odio! Fugiat at
                    expedita deserunt dolorum molestias.
                  </p>
                </div>
                <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800 lg:w-7/12">
                  <div>
                    <dl className="faq mx-auto max-w-2xl">
                      <dt className="text-lg">
                        <button
                          type="button"
                          className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                          aria-controls="faq-1"
                          data-active="false"
                        >
                          <span className="font-medium text-gray-900 dark:text-white">
                            How to customize the template ?
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <svg
                              className="arrow-down h-6 w-6 rotate-0 transform duration-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd
                        className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                        id="faq-1"
                      >
                        <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Laborum quod pariatur possimus at fugit natus
                          aspernatur molestiae. Velit, odio modi provident
                          necessitatibus molestias qui voluptatibus similique
                          magnam a nam rem!
                        </p>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <dl className="faq mx-auto max-w-2xl">
                      <dt className="text-lg">
                        <button
                          type="button"
                          className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                          aria-controls="faq-2"
                          data-active="false"
                        >
                          <span className="font-medium text-gray-900 dark:text-white">
                            How many times can I use the template ?
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <svg
                              className="arrow-down h-6 w-6 rotate-0 transform duration-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd
                        className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                        id="faq-2"
                      >
                        <div className="pb-6 text-base text-gray-600 dark:text-gray-400">
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Laborum quod pariatur possimus at fugit natus
                            aspernatur molestiae. Velit, odio modi provident
                            necessitatibus molestias qui voluptatibus similique
                            magnam a nam rem!
                          </p>
                          <ul className="mt-4 list-outside list-disc pl-4">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                          </ul>
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <dl className="faq mx-auto max-w-2xl">
                      <dt className="text-lg">
                        <button
                          type="button"
                          className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                          aria-controls="faq-3"
                          data-active="false"
                        >
                          <span className="font-medium text-gray-900 dark:text-white">
                            How to customize the template ?
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <svg
                              className="arrow-down h-6 w-6 rotate-0 transform duration-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd
                        className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                        id="faq-3"
                      >
                        <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Laborum quod pariatur possimus at fugit natus
                          aspernatur molestiae. Velit, odio modi provident
                          necessitatibus molestias qui voluptatibus similique
                          magnam a nam rem!
                        </p>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <dl className="faq mx-auto max-w-2xl">
                      <dt className="text-lg">
                        <button
                          type="button"
                          className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                          aria-controls="faq-4"
                          data-active="false"
                        >
                          <span className="font-medium text-gray-900 dark:text-white">
                            How to customize the template ?
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <svg
                              className="arrow-down h-6 w-6 rotate-0 transform duration-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd
                        className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                        id="faq-4"
                      >
                        <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Laborum quod pariatur possimus at fugit natus
                          aspernatur molestiae. Velit, odio modi provident
                          necessitatibus molestias qui voluptatibus similique
                          magnam a nam rem!
                        </p>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <dl className="faq mx-auto max-w-2xl">
                      <dt className="text-lg">
                        <button
                          type="button"
                          className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                          aria-controls="faq-5"
                          data-active="false"
                        >
                          <span className="font-medium text-gray-900 dark:text-white">
                            How to customize the template ?
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <svg
                              className="arrow-down h-6 w-6 rotate-0 transform duration-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd
                        className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                        id="faq-5"
                      >
                        <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Laborum quod pariatur possimus at fugit natus
                          aspernatur molestiae. Velit, odio modi provident
                          necessitatibus molestias qui voluptatibus similique
                          magnam a nam rem!
                        </p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gradient-to-b from-transparent to-gray-100 py-12 dark:to-gray-900">
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
            <a
              href="#home"
              aria-label="logo"
              className="flex items-center justify-center space-x-2"
            >
              <div aria-hidden="true" className="flex flex-col space-y-0.5">
                <div className="h-0 w-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent border-b-gray-900 dark:border-b-white" />
                <div className="mx-auto h-1 w-4 rounded-full bg-primary" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Astrolus
              </span>
            </a>
            <ul
              role="list"
              className="mt-12 flex flex-wrap items-center justify-center gap-4 py-4 text-gray-600 dark:text-gray-400 sm:gap-8"
            >
              <li role="listitem">
                <a
                  href="/#home"
                  className="duration-300 hover:text-primary dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li role="listitem">
                <a
                  href="/#features"
                  className="duration-300 hover:text-primary dark:hover:text-white"
                >
                  Features
                </a>
              </li>
              <li role="listitem">
                <a
                  href="/#solution"
                  className="duration-300 hover:text-primary dark:hover:text-white"
                >
                  Solution
                </a>
              </li>
              <li role="listitem">
                <a
                  href="/#reviews"
                  className="duration-300 hover:text-primary dark:hover:text-white"
                >
                  Reviews
                </a>
              </li>
              <li role="listitem">
                <a
                  href="/#pricing"
                  className="duration-300 hover:text-primary dark:hover:text-white"
                >
                  Pricing
                </a>
              </li>
            </ul>
            <div className="m-auto mt-4 flex w-max items-center justify-between space-x-4 text-gray-500">
              <a
                className="duration-300 hover:text-gray-600 dark:hover:text-white"
                href="https://twitter.com/@tailus_ui"
                title="twitter"
                target="blank"
                aria-label="twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="duration-300 hover:text-gray-600 dark:hover:text-white"
                href="#"
                title="facebook"
                target="blank"
                aria-label="facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                className="duration-300 hover:text-gray-600 dark:hover:text-white"
                href="#"
                title="linkedin"
                target="blank"
                aria-label="linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
            <div className="mt-12 text-center">
              <span className="text-sm tracking-wide text-gray-500">
                Copyright © tailus 2021 - Present | All rights reserved
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default index
