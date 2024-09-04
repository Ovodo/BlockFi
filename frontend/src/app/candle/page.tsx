import CandleStick from "@/components/CandleStick";

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col gap-8 items-center py-10 px-8 md:px-20 bg-platinum'>
      <h1 className='text-3xl font-semibold self-start text-oxford_blue mb-4'>
        Candle Stick Chart
      </h1>

      <div className='bg-white w-max flex justify-center shadow-md rounded-lg p-6'>
        <CandleStick />
      </div>

      <section className='bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-semibold text-oxford_blue mb-4'>
          Summary
        </h2>
        <p className='text-base text-gray-700 leading-relaxed'>
          A Candlestick chart is commonly used in financial analysis to
          represent the price movement of a security, derivative, or currency
          over a specific time period.
        </p>
        <h2 className='text-2xl font-semibold text-oxford_blue mt-6 mb-4'>
          Use Case
        </h2>
        <p className='text-base text-gray-700 leading-relaxed'>
          Best for visualizing stock price movements, forex trading, or other
          financial market activities.
        </p>
      </section>
    </div>
  );
}
