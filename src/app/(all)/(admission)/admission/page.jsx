import Link from 'next/link';
import { FaGraduationCap } from 'react-icons/fa';

const Admission = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-jura font-bold uppercase text-center">Admission</h2>
        <div className="flex items-start gap-4">
          <div className="mt-2 select-none">________</div>
          <FaGraduationCap size={30} className="my-4" />
          <div className="mt-2 select-none">________</div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <div className="font-jura font-bold text-2xl">Admission</div>
          <div className="mt-4">
            Strictly on Merit by written Test notified by the College. Admission is being taken through the entrance examination conducted by the
            college, following the norms and conditions of P.C.I. and Magadh University, Bodh Gaya.
          </div>
        </div>

        <div>
          <div className="font-jura font-bold text-2xl">Eligibility Criteria for Admission</div>
          <div className="mt-4"> The minimum qualification required for the admission are mentioned below.</div>
          <table className="table-auto border-collapse border border-gray-300 text-xs md:text-base">
            <thead>
              <tr>
                <th className="border-2 border-gray-300 px-2 py-2 text-left">S. No.</th>
                <th className="border-2 border-gray-300 px-2 py-2 text-left">Program</th>
                <th className="border-2 border-gray-300 px-2 py-2 text-left">Qualifying Exam</th>
                <th className="border-2 border-gray-300 px-2 py-2 text-left">Percentage Required</th>
                <th className="border-2 border-gray-300 px-2 py-2 text-left">Subjects / Specialization Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-gray-300 px-2 py-2">1</td>
                <td className="border-2 border-gray-300 px-2 py-2">D. Pharm.</td>
                <td className="border-2 border-gray-300 px-2 py-2">10+2 (PCB/M)</td>
                <td className="border-2 border-gray-300 px-2 py-2">50%</td>
                <td className="border-2 border-gray-300 px-2 py-2">Physics, Chemistry & (Maths/ Biology)</td>
              </tr>
              {/* <tr>
                <td className="border-2 border-gray-300 px-2 py-2">2</td>
                <td className="border-2 border-gray-300 px-2 py-2">B. Pharm.</td>
                <td className="border-2 border-gray-300 px-2 py-2">10+2 (PCB/M)</td>
                <td className="border-2 border-gray-300 px-2 py-2">50%</td>
                <td className="border-2 border-gray-300 px-2 py-2">Physics, Chemistry & (Maths/ Biology)</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-300 px-2 py-2">3</td>
                <td className="border-2 border-gray-300 px-2 py-2">B. Pharm. (Lateral Entry)</td>
                <td className="border-2 border-gray-300 px-2 py-2">D. Pharm</td>
                <td className="border-2 border-gray-300 px-2 py-2">45%</td>
                <td className="border-2 border-gray-300 px-2 py-2">-</td>
              </tr> */}
            </tbody>
          </table>
        </div>

        <div>
          <div className="font-jura font-bold text-2xl">Reservation of Seats</div>
          <div className="mt-4">
            The college strictly follow the policy of reservation of the Govt. of UttarPradesh. In the case of no candidates of reserved categories the seats
            will be offered to candidates outside these categories.
          </div>
        </div>

        {/* <div>
          <div className="font-jura font-bold text-2xl">Foreign & NRI Students</div>
          <div className="mt-4">
            Seats are reserved for foreign nationals & NRI’s as per the direction from AICTE, Govt. of India. They should have proper equivalent
            qualification approved by Govt. of India, Ministry of Education & Social Welfare. The international students may seek admission in the
            college through one of the two modes outlined below. Foreign citizens, PIO/OCI card holders, NRI and NRI-sponsored students are eligible
            for admission in this category.
          </div>
        </div>

        <div>
          <div className="font-jura font-bold text-2xl">Admission of Foreign/ NRI Students</div>
          <div className="mt-4">The minimum educational qualification required for the admission to various courses are mentioned below.</div>
          <table className="table-auto border-collapse border border-gray-300 text-xs md:text-base">
            <thead>
              <tr>
                <th className="border-2 border-gray-300 px-2 py-2 text-left">Mode of Admission</th>
                <th className="border-2 border-gray-300 px-2 py-2 text-left">Foreign/ NRI Category</th>
                <th className="border-2 border-gray-300 px-2 py-2 text-left">NRI/PIO/OCI Applicants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-gray-300 px-2 py-2"></td>
                <td className="border-2 border-gray-300 px-2 py-2">
                  Direct admission to the program of your interest based on meeting certain minimum standard of academic performance in the qualifying
                  examination.
                </td>
                <td className="border-2 border-gray-300 px-2 py-2">
                  Admission to the program of your interest through the prescribed entrance/admission procedure
                </td>
              </tr>
              <tr>
                <td className="border-2 border-gray-300 px-2 py-2">Eligibility Criteria</td>
                <td className="border-2 border-gray-300 px-2 py-2" colSpan={2}>
                  {`Applicant must meet the eligibility criterion for admission to pharmacy program in TOSS College of Pharmacy. The Association of
                  Indian Universities prescribes the equivalent qualifications for many examinations across the globe. Cambridge HSCE, UK GCE,
                  Ethiopian School Leaving Certificate Examination, NECTA Form 4 & Form 6, ‘O’ and ‘A’ level examinations of various countries,
                  International Baccalaureate and Secondary / Senior Secondary /Intermediate Examinations of various countries are some of the
                  certifications that are generally accepted. Applicant is required to ensure that his/her qualification is equivalent to the Indian
                  qualification required for admission to the program of interest.`}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-gray-300 px-2 py-2">Fees</td>
                <td className="border-2 border-gray-300 px-2 py-2 col-span-2" colSpan={2}>
                  Consult college
                </td>
              </tr>
              <tr>
                <td className="border-2 border-gray-300 px-2 py-2">How to apply</td>
                <td className="border-2 border-gray-300 px-2 py-2 col-span-2" colSpan={2}>
                  Visit{' '}
                  <Link href="#" className="underline">
                    www.abc.com
                  </Link>
                  <br />
                  Proceed as guided.
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        <div>
          <div className="font-jura font-bold text-2xl">Selection Procedure</div>
          <div className="mt-4">
            The merit list of successful candidates will be drawn up on the basis of the score obtained in the entrance test followed by the
            counselling & personal interview. The candidate whose name appears in the merit list must report to the admission cell of the college
            within the prescribed date. The successful candidates from out the state will be informed by post/ Email immediately. They will have to
            report within the prescribed dates to deposit their fees and for securing admission. Failure to report in time may lead to cancellation of
            selection. The candidates have to report to the principal of the college who would sign an acknowledgement slip and give date and time
            after verifying that the candidate name appears in the merit list. Admission will offered to candidates as per serial number in the merit
            and waiting list subject to availability of seats after his/her certificate etc. are checked to be in order by the Principal who would
            then give the candidate an authority to deposit fees.
          </div>
        </div>

        <div>
          <div className="font-jura font-bold text-2xl">Mode of Securing Admission</div>
          <div className="mt-4">
            To secure admission in the college the selected candidates shall have to : <br /> 1. Get his/her original certificates examined by the
            office. <br /> 2. Submit Medical Certificate of fitness.
          </div>
          <div className="mt-4">
            Submit two copies of recent photographs. <br /> 1. Submit a copy of Aadhar Card as ID proof of the candidate. <br /> 2. Deposit the
            prescribed fee and other charges as indicated in the selection card.
          </div>
          <div className="mt-4">
            In account of any reason, candidate himself/herself cannot come to secure the seat offered to him/her, he/she may send his/her
            father/guardian to claim the seat on his/her behalf authorized by him/her. The office of the college will remain open from 10:30 a.m. to
            5:30 p.m. only for admission work. After completion of the above formalities, the selected candidates shall be allotted a Roll Number.
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
