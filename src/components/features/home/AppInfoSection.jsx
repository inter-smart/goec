const AppInfoSection = {
  media: {
    type: "image",
    path: "/images/app_info-1.jpg",
    alt: "app_info",
  },
  title: "Say hi to your co-driver.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.",
  button: {
    link: "/",
    label: "Learn more",
  },
  app_download: {
    title: "Download the app",
    buttons: [
      {
        type: "ios",
        link: "#",
      },
      {
        type: "android",
        link: "#",
      },
    ]
  }
};
export default function AppInfoSection() {
  return (
    <section className="w-full h-auto block relative z-0 py-[40px] sm:py-[80px] xl:py-[100px] 2xl:py-[120px]">
      <div className="container">
        <Image
          src="/images/expertise-sec-bg.svg"
          alt="expertise-bg"
          width={1820}
          height={1820}
        />
      </div>
    </section>
  );
}
