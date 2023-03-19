import Link from "next/link";
import { Button } from "antd";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl">Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tempora
        voluptatum omnis accusamus voluptas. Odit eos aperiam dolorem deleniti
        possimus quis officiis, doloremque hic vitae. Aperiam exercitationem est
        iste beatae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tempora
        voluptatum omnis accusamus voluptas. Odit eos aperiam dolorem deleniti
        possimus quis officiis, doloremque hic vitae. Aperiam exercitationem est
        iste beatae.
      </p>
      <div className="flex justify-center mt-2">
        <Link href="/products">
          <Button className="bg-blue-500" type="primary">
            Check Products Available
          </Button>
        </Link>
      </div>
    </>
  );
}
