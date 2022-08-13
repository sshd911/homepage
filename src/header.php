<header>
  <nav class="container flex flex-wrap justify-between items-center mx-auto">
    <div class="">
      <div class="text-bold text-white">Maeda Sho</div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div class="flex flex-wrap justify-between items-center ">
      <div x-on:click="about=true;archives=false;credit=false;" class="p-4 pr-4 m-2 bg-gray-300 opacity-20 rounded-lg">
        <div class="text-bold text-gray">About</div>
      </div>
      <div x-on:click ="archives=true;about=false;credit=false;" class="p-4 pl-4 m-2 bg-gray-300 opacity-20 rounded-lg">
        <div class="text-bold text-gray">Archives</div>
      </div>
      <div x-on:click ="credit=true;about=false;archives=false" class="p-4 pl-4 m-2 mr-0 bg-gray-300 opacity-20 rounded-lg">
        <div class="text-bold text-gray">Credit</div>
      </div>
    </div>
  </nav>
</header>