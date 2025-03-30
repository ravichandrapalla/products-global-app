import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container p-10">
      <h1 className="text-3xl font-bold text-center">Welcome to Our Store</h1>
      <p className="text-center mt-2 text-gray-600">
        Discover amazing products at unbeatable prices!
      </p>

      {/* Featured Products Section */}
      <section className="mt-8 grid grid-cols-4 grid-rows-4 gap-x-6  bg-blue-300">
        <div className="border p-4 rounded-lg shadow">
          <Image
            src="/images/product1.jpg"
            width={200}
            height={200}
            alt="Product 1"
            quality={100}
            className="w-full h-full object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">Product Name</h2>
          <p className="text-sm text-gray-500">$99.99</p>
          <Link href="/shop/products/1">
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
              View Product
            </button>
          </Link>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <Image
            src="/images/product1.jpg"
            width={200}
            height={200}
            alt="Product 1"
            quality={100}
            className="w-full h-full object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">Product Name</h2>
          <p className="text-sm text-gray-500">$99.99</p>
          <Link href="/shop/products/1">
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
              View Product
            </button>
          </Link>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <Image
            src="/images/product1.jpg"
            width={200}
            height={200}
            alt="Product 1"
            quality={100}
            className="w-full h-full object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">Product Name</h2>
          <p className="text-sm text-gray-500">$99.99</p>
          <Link href="/shop/products/1">
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
              View Product
            </button>
          </Link>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <Image
            src="/images/product1.jpg"
            width={200}
            height={200}
            alt="Product 1"
            quality={100}
            className="w-full h-full object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">Product Name</h2>
          <p className="text-sm text-gray-500">$99.99</p>
          <Link href="/shop/products/1">
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
              View Product
            </button>
          </Link>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <Image
            src="/images/product1.jpg"
            width={200}
            height={200}
            alt="Product 1"
            quality={100}
            className="w-full h-full object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">Product Name</h2>
          <p className="text-sm text-gray-500">$99.99</p>
          <Link href="/shop/products/1">
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
              View Product
            </button>
          </Link>
        </div>
        {/* Add more product cards here */}
      </section>
    </main>
  );
}
