import Star from "./Star";

export default function Generation({ com }) {
  const redondeo = Math.round(com.confidence * 100);
  return (
    <div class="block w-80 px-6 pb-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Star prediction={com.prediction}></Star>
      <p class="font-normal text-gray-700">prediccion: {redondeo} % </p>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {com.name}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 break-words">
        {com.comment}
      </p>
    </div>
  );
}
