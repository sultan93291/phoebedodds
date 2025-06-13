import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";

import Container from "../Shared/Container";
import { subscribeToNewsletter } from "@/features/newslatter/subscribeSlice";

type FormValues = {
  email: string;
};

const Newslater = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useSelector(
    (state: RootState) => state.subscribeNewsletter
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    dispatch(subscribeToNewsletter(data.email)).then((res) => {
      const success = (res as any)?.meta?.requestStatus === "fulfilled";
      if (success) {
        reset();
      }
    });
  };

  return (
    <section className="pb-[100px] 2xl:px-0 px-5">
      <Container className="flex flex-col md:flex-row justify-between">
        <h3
          className="font-inter xl:text-[32px] text-[24px] xl:text-start text-center font-semibold text-[#000]"
          data-aos="fade-up"
        >
          NewsLetter
        </h3>

        <div className="flex flex-col items-start justify-start mt-2 md:mt-0">
          <h2
            className="text-center md:text-[40px] xl:text-[96px] lg:text-[56px] text-[35px] font-inter text-[#000] font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Your Interior Intel
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full mt-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col xl:flex-row gap-y-2 xl:gap-y-0 md:gap-x-4 w-full">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className={`p-3 md:p-5 rounded-[24px] border ${
                  errors.email ? "border-red-500" : "border-[#000]"
                } outline-0 flex grow-2 w-full text-gray-400 text-[16px] font-inter`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="p-3 md:p-5 rounded-[24px] bg-[#000] text-white text-[16px] font-inter cursor-pointer hover:bg-[#FFF] hover:text-black hover:outline 
                hover:outline-[#000] lg:w-[250px] w-full duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Newslater;
