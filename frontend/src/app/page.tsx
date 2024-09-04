import LineChart from "@/components/LineChart";

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col gap-8 items-center py-10 px-8 md:px-20 bg-platinum'>
      <h1 className='text-3xl font-semibold self-start text-oxford_blue mb-4'>
        Line Chart
      </h1>

      <div className='bg-white w-max flex justify-center shadow-md rounded-lg p-6'>
        <LineChart />
      </div>

      <section className='bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-semibold text-oxford_blue mb-4'>
          Summary
        </h2>
        <p className='text-base text-gray-700 leading-relaxed'>
          A Line chart is a basic type of chart that displays information as a
          series of data points connected by straight line segments. It is
          effective for showing trends over time.
        </p>
        <h2 className='text-2xl font-semibold text-oxford_blue mt-6 mb-4'>
          Use Case
        </h2>
        <p className='text-base text-gray-700 leading-relaxed'>
          Line charts are ideal for tracking changes over periods, such as
          monthly sales, temperature changes, or stock prices. They are best
          used when you want to show how a particular data set has changed over
          time.
        </p>
      </section>
    </div>
  );
}
