import Header from "@/ui/Header";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-amber-700">
      <Header />
      <section className="flex-grow"> Main content</section>
    </div>
  );
}
