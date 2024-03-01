import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

const Calendar = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Track status" />

      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm ">
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 mb-3 shadow-default dark:border-strokedark dark:bg-boxdark flex justify-between items-center">
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Patient name:</span> Parth Pujara
            </div>
            <div className="text-[14px]">
              1<sup>st</sup> March, 2024
            </div>
          </div>
          <div>
            <div className="rounded-md border border-yellow-400 text-yellow-400 px-2 py-1 mb-3 cursor-pointer">
              Pending
            </div>
            <div className="rounded-md border border-green-600 text-green-600 px-2 py-1 cursor-pointer">
              Reviewed
            </div>
          </div>
        </div>
        {/* The button to open modal */}
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </DefaultLayout>
  );
};

export default Calendar;
