const BookTable = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-white">
        <thead className="text-xs uppercase bg-gray-700 text-white font-bold">
          <tr>
            <th scope="col" className="px-6 py-3">
              Judul
            </th>
            <th scope="col" className="px-6 py-3">
              Pengarang
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-gray-700  bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
              Harry Potter
            </th>
            <td className="px-6 py-4">J.K Rowling</td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                Ubah
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
