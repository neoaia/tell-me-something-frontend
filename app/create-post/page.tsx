"use client";

import Button from "@/components/Button";
import { TAILWIND_DESIGNS, INPUT_LIMIT } from "@/constants";
import React, { useState } from "react";

const CreatePage = () => {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");

  const isPostComplete =
    !!recipient?.trim() && !!message?.trim() && !!signature?.trim();

  async function submitPost(e: React.SubmitEvent) {
    e.preventDefault();

    console.log({
      recipient,
      message,
      signature,
    });

    setRecipient('');
    setMessage('');
    setSignature('');
  }

  return (
    <>
      <form
        onSubmit={submitPost}
        className="flex flex-col w-full max-w-4xl gap-5"
      >
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className={TAILWIND_DESIGNS.INPUT_BOX_DESIGN}
          placeholder="Who's your recipient?"
          maxLength={INPUT_LIMIT.RECIPIENT_LIMIT}
        />

        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={TAILWIND_DESIGNS.INPUT_BOX_DESIGN}
          placeholder="Write your message.."
          rows={10}
          maxLength={INPUT_LIMIT.MESSAGE_LIMIT}
        ></textarea>

        <div className="flex flex-row gap-3">
          <input
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            className={`${TAILWIND_DESIGNS.INPUT_BOX_DESIGN} flex-1`}
            type="text"
            placeholder="What's your codename? ;)"
            maxLength={INPUT_LIMIT.SIGNATURE_LIMIT}
          />

          <Button
            label="Submit Post"
            type="submit"
            disabled={!isPostComplete}
          />
        </div>
      </form>
    </>
  );
};

export default CreatePage;
