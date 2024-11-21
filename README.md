# css-framework

    <header class="bg-customPurple text-black p-4">
      <nav class="container mx-auto">
        <div>
          <a href="/profile.html" class="flex items-center py-4 px">
            <svg
              class="sm:w-6 sm:h-6 lg:w-10 lg:h-10"
              width="40"
              height="40"
              viewBox="0 0 80 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- SVG path content -->
            </svg>
          </a>
        </div>
        <div class="hidden md:flex items-center space-x-1">
          <a
            href="/feed.html"
            class="py-4 px-2 text-black font-semibold border-b-4 border-customNav"
            >Feed</a
          >
          <a
            href="/feed.html"
            class="py-4 px-2 text-white font-semibold hover:text-customNav transition duration-300"
            >Option</a
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <!-- SVG path content -->
          </svg>
        </div>
        <div class="flex md:hidden items-center">
          <button id="menu-btn">
            <svg
              class="w-6 h-6 text-white hover:text-customNav"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <!-- SVG path content -->
            </svg>
          </button>
        </div>
        <div class="hidden" id="mobile-menu">
          <ul>
            <li>
              <a
                href="feed.html"
                class="block text-sm py-4 px-2 text-white bg-customPurple font-semibold"
                >Feed</a
              >
            </li>
            <li>
              <a
                href="/profile.html"
                class="block text-sm py-4 px-2 bg-customPurple font-semibold"
                >Option</a
              >
            </li>
            <li>
              <a
                href="/"
                class="block text-sm py-4 px-2 bg-customPurple font-semibold"
                >Signup</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      Responsive Heading
    </h1>
    <div class="hidden md:block">
      This content is hidden on small screens but visible on medium and larger
      screens.
    </div>
    <div class="bg-blue-500 md:bg-red-500 lg:bg-green-500">
      This div will have a blue background by default, red on medium screens,
      and green on large screens.
    </div>
    <div class="text-sm md:text-lg lg:text-xl">
      This text is small on mobile, larger on tablets, and even larger on
      desktops.
    </div>
    <div class="p-4 sm:p-6 md:p-8 lg:p-12">Responsive padding</div>
    <body class="bg-white dark:bg-gray-900 text-black dark:text-white">
      <button id="theme-toggler">Toggle Theme</button>
    </body>
    <div
      class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4"
    >
      <div class="bg-blue-500 p-4">Item 1</div>
      <div class="bg-green-500 p-4">Item 2</div>
      <div class="bg-red-500 p-4">Item 3</div>
      <div class="bg-yellow-500 p-4">Item 4</div>
      <div class="bg-purple-500 p-4">Item 5</div>
      <div class="bg-pink-500 p-4">Item 6</div>
    </div>
