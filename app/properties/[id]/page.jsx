"use client";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  console.log("Check router ", router);
  return (
    <div>
      <div> Property Path Name is {pathname}</div>
      <div> Property Page search Param is {searchParams.get("name")}</div>
      <div> Property Page Id is {params.id}</div>
      <button onClick={() => router.replace("/")}> Click Me</button>
    </div>
  );
};

export default PropertyPage;
