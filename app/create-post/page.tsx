"use client";

import Button from "@/components/Button";
import { TAILWIND_DESIGNS, INPUT_LIMIT } from "@/constants";
import { createService } from "@/features/create/api";
import React, { useEffect, useState } from "react";
import { PostInterface } from "@/features/create/types";
import { useRouter } from "next/navigation";

const CreatePage = () => {
  const router = useRouter();

  const [recipient, setRecipient] = useState("");
  const [content, setContent] = useState("");
  const [signature, setSignature] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isPostComplete =
    !!recipient?.trim() && !!content?.trim() && !!signature?.trim();

  async function submitPost(e: React.SubmitEvent) {
    e.preventDefault();

    const postData = {
      recipient: recipient,
      content: content,
      signature: signature,
    };

    try {
      setIsLoading(true);
      const result = await createService.createPost(postData);

      console.log("Success: ", result);
      setIsSuccess(true);

      router.replace("/browse");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      throw error;
    }
  }

  useEffect(() => {
    const clearState = () => {
      setRecipient("");
      setContent("");
      setSignature("");
      setIsSuccess(false);
    };

    clearState();
  }, []);

  return (
    <>
      <div className="font-bold text-7xl mb-10">Post</div>

      <form onSubmit={submitPost} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="text-lg">Recipient</div>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className={TAILWIND_DESIGNS.INPUT_BOX_DESIGN}
            placeholder="Who is this for?"
            maxLength={INPUT_LIMIT.RECIPIENT_LIMIT}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-lg">Message</div>
          <textarea
            id="message"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={TAILWIND_DESIGNS.INPUT_BOX_DESIGN}
            placeholder="Write your message.."
            rows={10}
            maxLength={INPUT_LIMIT.MESSAGE_LIMIT}
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-lg">Signature</div>
          <input
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            className={`${TAILWIND_DESIGNS.INPUT_BOX_DESIGN} flex-1`}
            type="text"
            placeholder="What's your codename? ;)"
            maxLength={INPUT_LIMIT.SIGNATURE_LIMIT}
          />
        </div>

        <Button label="Submit Post" type="submit" disabled={!isPostComplete} />
      </form>
    </>
  );
};

export default CreatePage;
