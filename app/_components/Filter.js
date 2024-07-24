"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const activeFilter = searchParams.get("capacity") ?? "all";

  return (
    <div className="flex border border-primary-800">
      <Button
        handleFilter={handleFilter}
        filter="all"
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="small"
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>

      <Button
        handleFilter={handleFilter}
        filter="medium"
        activeFilter={activeFilter}
      >
        3&mdash;7 guests
      </Button>

      <Button
        handleFilter={handleFilter}
        filter="large"
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ children, filter, handleFilter, activeFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-3 hover:bg-primary-700 ${
        activeFilter === filter ? " bg-primary-700 " : ""
      }`}
    >
      {children}
    </button>
  );
}
