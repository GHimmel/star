import Generation from "@/components/Generation";
import Nav from "../components/Nav";
import Calification from "@/components/Calification";
import { useState } from "react";

export default function Home() {
  const [comment, setComment] = useState([]);

  return (
    <>
      <Nav></Nav>
      <Calification setComment={setComment} comment={comment}></Calification>
      <div class="flex flex-wrap justify-center p-12 gap-2 ">
        {comment.map((com, index) => {
          return (
            <div key={index}>
              <Generation com={com}></Generation>
            </div>
          );
        })}
      </div>
    </>
  );
}
