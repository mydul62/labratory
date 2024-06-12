import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useRef, useEffect } from "react";

const UserDoc = () => {
  const axiosSecure = useAxiosSecure();
  const { email } = useParams();
  const pdfRef = useRef();

  const { data: userinformations = [] } = useQuery({
    queryKey: ["userinformations", email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allusers/email/${email}`);
      return data;
    },
  });

  const { data: appointments = [] } = useQuery({
    queryKey: ["appointments", email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/alltest/Booking/${email}`);
      return data;
    },
  });

  useEffect(() => {
    // Replace unsupported color functions in styles
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const styles = getComputedStyle(element);
      Array.from(styles).forEach(style => {
        if (styles[style] && typeof styles[style] === 'string' && styles[style].includes('oklch')) {
          element.style[style] = styles[style].replace(/oklch\([^\)]+\)/g, 'rgba(255, 255, 255, 1)');
        }
      });
    });
  }, []);

  const downloadPDF = () => {
    const input = pdfRef.current;
    const originalBackground = input.style.backgroundColor;
    input.style.backgroundColor = 'white';

    html2canvas(input, {
      useCORS: true, // Ensure CORS settings are handled
      allowTaint: true, // Allow tainted canvas
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imageWidth, pdfHeight / imageHeight);
      const imgX = (pdfWidth - imageWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imageWidth * ratio, imageHeight * ratio);
      pdf.save('invoice.pdf');
      input.style.backgroundColor = originalBackground;
    }).catch(error => {
      console.error('Error generating PDF:', error);
      input.style.backgroundColor = originalBackground;
    });
  };

  return (
    <div>
      <div id="pdf_section" className="max-w-7xl mx-auto py-4 flex justify-center">
        <button onClick={downloadPDF} className="btn-sm btn bg-green-400">Print Info</button>
      </div>
      <div className="max-w-7xl mx-auto border p-8  rounded-md" ref={pdfRef}>
        <div className="flex justify-between items-center mb-[200px]">
          <div className="text-black">
            <h2 className="text-2xl">PatientName : {userinformations?.name}</h2>
            <h2>Email : {userinformations?.emailAdress}</h2>
            <h2>Blood : {userinformations?.bloodGrupe}</h2>
            <h2>District : {userinformations?.districs}</h2>
            <h2>Upazella : {userinformations?.upazella}</h2>
          </div>
          <div className=" text-black">
            <h3>Invoice Date: {new Date().toLocaleDateString()}</h3>
          </div>
        </div>
        <hr />
        <div className="mt-8">
          <section className="container px-4 mx-auto">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-x-3">
                              <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                              <button className="flex items-center gap-x-2">
                                <span>Test Name</span>
                              </button>
                            </div>
                          </th>
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Date</th>
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Status</th>
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Patients</th>
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Purchase</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {appointments.map((data,i) => (
                          <tr key={data?.id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                              {i+1}
                                <span>{data?.title}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {data?.appontmentData}
                            </td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                <h2 className="text-sm font-normal">{data?.status}</h2>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                <img className="object-cover w-8 h-8 rounded-full" src={userinformations?.image} alt="" />
                                <div>
                                  <h2 className="text-sm font-medium text-gray-800 dark:text-white">{userinformations?.userName}</h2>
                                  <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{userinformations?.userEmail}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{data?data.price:'0'}tk</td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap"></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDoc;
