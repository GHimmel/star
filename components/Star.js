export default function Star({ prediction }) {
  switch (prediction) {
    case "1":
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case "2":
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );

    case "3":
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case "4":
      return (
        <div class="flex flex-row ">
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
          <p class="text-4xl text-yellow-400">★</p>
        </div>
      );
    case "5":
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
