export default function Star({ bueno, malo }) {
  const star = Math.round(bueno * 10);
  switch (star) {
    case 0:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">ㅤ</p>
        </div>
      );
    case 1:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case 2:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );

    case 3:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case 4:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case 5:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case 6:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case 7:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case 8:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case 9:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case 10:
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
  }
}
