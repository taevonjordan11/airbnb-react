import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";

function Search() {
  const router = useRouter();
  // Destructuring queries
  const { location, startDate, endDate, numGuest } = router.query;

  const formatStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formatendDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formatStartDate} - ${formatendDate}`;

  console.log(router.query);
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {numGuest} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancel flex</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
