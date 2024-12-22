import { FaGraduationCap } from 'react-icons/fa';

const FeeDetails = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-jura font-bold uppercase text-center">Fee Details</h2>
        <div className="flex items-start gap-4">
          <div className="mt-2 select-none">________</div>
          <FaGraduationCap size={30} className="my-4" />
          <div className="mt-2 select-none">________</div>
        </div>
      </div>

      <div className="w-full">
        <table class="table-auto w-full border-collapse border border-gray-300 text-xs md:text-base text-center">
          <thead>
            <tr>
              <th class="border-2 border-gray-300 px-2 py-2">Courses</th>
              <th class="border-2 border-gray-300 px-2 py-2">Courses Fees</th>
              <th class="border-2 border-gray-300 px-2 py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-2 border-gray-300 px-2 py-2">B. Pharm</td>
              <td class="border-2 border-gray-300 px-2 py-2">Rs. 1,00,000/-</td>
              <td class="border-2 border-gray-300 px-2 py-2">Per Annum</td>
            </tr>
            <tr>
              <td class="border-2 border-gray-300 px-2 py-2">D. Pharm</td>
              <td class="border-2 border-gray-300 px-2 py-2">Rs. 1,00,000/-</td>
              <td class="border-2 border-gray-300 px-2 py-2">Per Annum</td>
            </tr>
            <tr>
              <td class="border-2 border-gray-300 px-2 py-2">M. Pharm</td>
              <td class="border-2 border-gray-300 px-2 py-2 col-span-2" colSpan={2}>
                For M.Pharm Fees contact college
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FeeDetails;
