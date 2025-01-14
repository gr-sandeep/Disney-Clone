import React from "react";

const Login = () => {
  return (
    <section className="text-center h-screen">
      <main className="h-full flex flex-col items-center justify-center w-full bg-[url('/images/login-background.jpg')] bg-no-repeat bg-cover">
        <div className="max-w-[650px] flex flex-col items-center justify-center gap-5 px-10 md:px-0">
          <img src={"/images/cta-logo-one.svg"} className="w-[650px]" alt="" />
          <button className="bg-[#0063E5] font-bold hover:bg-[#0483ee] w-full rounded text-lg p-4 tracking-wider border-transparent border">
            GET ALL THERE
          </button>

          <p className="leading-relaxed tracking-wider font-semibold w-full">
            Get Access to Raya and the last Dragon for an additional fee with a
            Disney+ subsription. As of {new Date().toLocaleDateString()}, the
            price of Disney+ and the Disney Bundle will increase by $2.
          </p>

          <img src={"/images/cta-logo-two.png"} className="mt-5" alt="" />

          <p className="text-gray-500 font-semibold text-sm text-center">
            Developed by G R Sandeep 😎
          </p>
        </div>
      </main>
    </section>
  );
};

export default Login;
