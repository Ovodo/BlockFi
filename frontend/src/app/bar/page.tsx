import BarChart from "@/components/BarChart";

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col gap-8 items-center py-10 px-8 md:px-20 bg-platinum'>
      <h1 className='text-3xl font-semibold self-start text-oxford_blue mb-4'>
        Bar Chart
      </h1>

      <div className='bg-white w-max flex justify-center shadow-md rounded-lg p-6'>
        <BarChart />
      </div>

      <section className='bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-semibold text-oxford_blue mb-4'>
          Summary
        </h2>
        <p className='text-base text-gray-700 leading-relaxed'>
          A Bar chart presents categorical data with rectangular bars with
          lengths proportional to the values they represent. Bars can be
          displayed vertically or horizontally
        </p>
        <h2 className='text-2xl font-semibold text-oxford_blue mt-6 mb-4'>
          Use Case
        </h2>
        <p className='text-base text-gray-700 leading-relaxed'>
          Useful for comparing quantities across different categories, like
          product sales, population distribution, or survey results.
        </p>
      </section>
    </div>
  );
}
