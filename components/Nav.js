import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav class="">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link
            href="https://flowbite.com"
            class="flex items-center text-3xl font-normal font-bold"
          >
            {" "}
            Star
          </Link>
        </div>
      </nav>
    </>
  );
}
