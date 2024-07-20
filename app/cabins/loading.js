import Spinner from "@/app/_components/Spinner";

export default function loading() {
  return (
    <div>
      <Spinner />
      <p className="text-center font-bold">Cabin data is loading...</p>
    </div>
  );
}
