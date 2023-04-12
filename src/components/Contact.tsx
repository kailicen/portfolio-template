import React, { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { heroVariants } from "./Hero";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const sendContactForm = async (data: any) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      await sendContactForm(formData);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
    }
    // window.location.href = `mailto:kailicen226@gmail?subject={formData.subject
    //   &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})}`;
  };
  return (
    <div
      className="h-screen w-screen md:w-auto flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 mx-auto items-center justify-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <motion.div
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col space-y-10 px-2"
      >
        <h4 className="hidden md:block text-xl md:text-2xl text-center">
          TIME SENSITIVE? DON&apos;T WAIT.{" "}
          <span className="decoration-green-400 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-green-400 h-7 w-7 animate-pulse " />
            <p className="text-sm md:text-xl">
              Call Bec on{" "}
              <span className="decoration-green-400 underline">
                0417 307 658
              </span>{" "}
              for immediate support.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          {errors.subject && (
            <span className="text-red-500">This field is required</span>
          )}
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          {errors.message && (
            <span className="text-red-500">This field is required</span>
          )}
          <button
            type="submit"
            className="bg-green-400 py-3 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
        {isSuccess && (
          <p className="text-green-500">Your message has been sent!</p>
        )}
      </motion.div>
    </div>
  );
}

export default Contact;
