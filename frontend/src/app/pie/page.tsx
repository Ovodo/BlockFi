import PieChart from "@/components/PieChart";

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col gap-8 items-center py-10 px-8 md:px-20 bg-platinum'>
      <h1 className='text-3xl font-semibold self-start text-oxford_blue mb-4'>
        Pie Chart
      </h1>

      <div className='bg-white w-max flex justify-center shadow-md rounded-lg p-6'>
        <PieChart />
      </div>

      <section className='bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-semibold text-oxford_blue mb-4'>
          Summary
        </h2>
        <p className='text-base text-gray-700 leading-relaxed'>
          A Pie chart is a circular chart divided into sectors, each
          representing a proportion of the whole. Each sector&apos;s arc length
          is proportional to the quantity it represents.
        </p>
        <h2 className='text-2xl font-semibold text-oxford_blue mt-6 mb-4'>
          Use Case
        </h2>
        <p className='text-base text-gray-700 leading-relaxed'>
          Use Case: Best for showing parts of a whole, such as market share
          distribution, budget allocation, or survey responses.
        </p>
      </section>
    </div>
  );
}
