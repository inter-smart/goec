"use client"; // ✅ Must be the first line

import NotFound from "@/components/NotFound";


export default function Error({
  path
}) {

  const errorData={
    statusCode: 500,
    message: "Something went wrong!",
    description: "Our server ran into an issue. We’re working on it. Please try again in a few moments.",
    btn_text: "Reload Page",
    btn_link: path
}


  return (
    <>
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-black to-blue-950 ">
          <NotFound data={errorData} />
        </main>
    </>
  );
}
