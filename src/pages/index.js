import Link from "next/link";
import { Button } from "antd";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-center mt-[65%] tablet:mt-[30%] desktop:mt-[20%]">
        <h1>HomePage</h1>
        <div className="flex flex-col items-center justify-center ">
          <Link href="/products">
            <Button className="bg-blue-500" type="primary" size="large">
              Check Products Available
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
