import axios from "axios";
import { useState } from "react";

export default function Calification({ setComment, comment }) {
  let estado = {};
  const [form, setForm] = useState({ name: "", comment: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSummit = async (e) => {
    e.preventDefault();
    const ia = await axios.post("api/ia", form);
    console.log(ia.data.body.classifications[0].labels.bueno.confidence);
    estado = {
      name: form.name,
      comment: form.comment,
      bueno: ia.data.body.classifications[0].labels.bueno.confidence,
      malo: ia.data.body.classifications[0].labels.malo.confidence,
    };

    setComment([...comment, estado]);
  };

  return (
    <div class="w-96 m-auto pt-12 ">
      <form onSubmit={handleSummit}>
        <div class="flex flex-col gap-2 ">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              name="name"
              type="text"
              id="first_name"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              onChange={handleChange}
              required
            ></input>
          </div>

          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your comment
          </label>
          <textarea
            name="comment"
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your comment here..."
            onChange={handleChange}
          ></textarea>
          <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-4  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            send comment
          </button>
        </div>
      </form>
    </div>
  );
}
