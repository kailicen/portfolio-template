import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (isChecked) {
      setIsSubmitting(true);
      try {
        await sendContactForm(formData);
        setIsSuccess(true);
      } catch (error) {
        console.log(error);
      }
      setIsSubmitting(false);
    } else {
      // show an error message or alert the user to check the checkbox
      alert("Please check the captcha checkbox before submitting the form.");
    }

    // window.location.href = `mailto:kailicen226@gmail?subject={formData.subject
    //   &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})}`;
  };

  useEffect(() => {
    let timeoutId: any;
    if (isSuccess) {
      timeoutId = setTimeout(() => {
        setIsSuccess(false);
      }, 8000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSuccess]);
  return (
    <div className="bg-white text-black">
      <Header />
      <div className="relative">
        <Image
          src="/img/contact-b.jpg"
          alt="contact-b"
          width={2300}
          height={300}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1
            className="text-xl md:text-4xl font-bold
          tracking-[20px] 2xl:text-7xl"
          >
            CONTACT US
          </h1>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto
      2xl:max-w-7xl 2xl:text-lg md:text-base"
      >
        <div
          className="flex flex-col space-y-5 py-5 px-2
        items-center justify-center"
        >
          <div
            className="flex flex-col space-y-10 px-2 items-center justify-center
        max-w-7xl"
          >
            <h4
              className="hidden md:block text-xl text-center
        2xl:text-3xl"
            >
              TIME SENSITIVE? DON&apos;T WAIT.{" "}
              <span className="decoration-emerald-600 underline">
                Lets Talk.
              </span>
            </h4>

            <div className="space-y-5">
              <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-emerald-600 h-7 w-7 animate-pulse " />
                <p className="text-sm md:text-xl">
                  Call Bec on{" "}
                  <span className="decoration-emerald-600 underline">
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

              {/* captcha */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="captcha"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="captcha">I am not a robot</label>
              </div>

              <button
                type="submit"
                className={`bg-emerald-600 text-white py-3 px-10 rounded-md font-bold 
            hover:bg-emerald-700 text-lg ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? <div className="spinner"></div> : "Submit"}
              </button>
            </form>
            {isSuccess && (
              <div className="fixed top-10 w-[350px] md:w-[480px] bg-emerald-600 rounded-md text-white py-3 px-4 text-center">
                Your message has been sent!
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
