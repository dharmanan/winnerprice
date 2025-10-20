// import { FHECounterDemo } from "./_components/FHECounterDemo";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center sm:items-start w-full px-3 md:px-0">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">FHEVM React Template</h1>
        <p className="text-lg text-gray-600 mb-8">Fully Homomorphic Encryption powered by Zama FHEVM</p>
        <p className="text-gray-500">Welcome to the FHE React application.</p>
      </div>
      {/* <FHECounterDemo /> */}
    </div>
  );
}
