import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="py-4 bg-blue-500">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <Link href="/">
            <div className="text-white font-bold text-xl">
              My Next.js Shopping App
            </div>
          </Link>
        </div>
        <div className="flex">
          <Link href="/">
            <div className="hover:text-gray-300 text-white mr-4">Home</div>
          </Link>
          <Link href="/products">
            <div className="hover:text-gray-300 text-white">Products</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar