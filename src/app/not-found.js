import NotFound from "@/components/NotFound";

export default function NotFoundPage() {

    const errorData={
    statusCode: 404,
    message: "Oops! Page not found.",
    description: "The page you’re looking for might have been moved, deleted, or never existed.",
    btn_text: "Go to Home",
    btn_link: '/'
}


  return (
    <>
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 via-[#030303] to-blue-900 transition-colors">
          <NotFound data={errorData} />
        </main>
    </>
  );
}
