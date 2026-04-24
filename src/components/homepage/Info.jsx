const Info = () => {

  return (
    <div className="info bg-white py-6 border-b-2 border-b-gray-100 mb-8">
      <div className=" mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white text-center p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#244D3F] mb-3">10</h3>
            <p className="text-[#64748B]">
              Total Friends
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#244D3F] mb-3">3</h3>
            <p className="text-[#64748B]">
              On Track
            </p>
          </div>
          <div className="bg-white text-center p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#244D3F] mb-3">6</h3>
            <p className="text-[#64748B]">
              Need Attention
            </p>
          </div>
          <div className="bg-white text-center p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#244D3F] mb-3">12</h3>
            <p className="text-[#64748B]">
              Interacts This Month
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Info;