"use client";
import { useRouter, useParams, useSearchParams } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  console.log("Check router ", router);
  return (
    <div>
      <div> Property Page search Param is {searchParams.get("name")}</div>
      <div> Property Page Id is {params.id}</div>
      <button onClick={() => router.replace("/")}> Click Me</button>
    </div>
  );
};

export default PropertyPage;
