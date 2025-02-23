

export const ContactComponent = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-8">
 
  
        {/* Company Contact Section */}
        <div className="bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600 p-6 border-b">Contact</h2>
          <div className="p-6 space-y-6">
            <h3 className="text-xl text-center bg-gray-100 py-3">
              Volferda industry (Guangdong Zhongke Suda Intelligent Equipment Co., Ltd.)
            </h3>
  
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="text-gray-500">Address:</p>
                <p className="md:col-span-2">Nanhai district, Foshan,China, zip code 528000</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="text-gray-500">Factory Address:</p>
                <p className="md:col-span-2">Shenlan Industrial Park, Danzao, Nanhai district, Foshan,China</p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="text-gray-500">Worktime:</p>
                <p className="md:col-span-2">8:00-18:00(Beijing time)</p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="text-gray-500">Business Phone:</p>
                <p className="md:col-span-2">00-86-18566028140(Working time)</p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <p className="text-gray-500">Fax:</p>
                <p className="md:col-span-2">86-0757-632118</p>
              </div>
            </div>
  
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <img 
                  src="/api/placeholder/200/100" 
                  alt="Volferda Logo"
                  className="h-16"
                />
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p className="text-gray-500">Company phone:</p>
                  <p>86-18566028140</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p className="text-gray-500">Company mobile:</p>
                  <p>86-18566028140</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p className="text-gray-500">Company country/region:</p>
                  <p>Guangdong</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p className="text-gray-500">Company city:</p>
                  <p>Foshan</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p className="text-gray-500">Fax:</p>
                  <p>86-0757-63211885</p>
                </div>
              </div>
            </div>
          </div>
        </div>



               {/* Personal Contact Section */}
               <div className="bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold p-6 border-b">Contacts</h2>
          <div className="p-6 space-y-4">
            <h3 className="text-xl text-gray-600">Mr. Bigbai</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500">Job Title:</p>
                  <p className="text-gray-700">Sales Manager</p>
                </div>
                <div>
                  <p className="text-gray-500">Business Phone:</p>
                  <p className="text-gray-700">86—18126759566</p>
                </div>
                <div>
                  <p className="text-gray-500">WhatsApp:</p>
                  <p className="text-gray-700">86—18126759566</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500">WeChat:</p>
                  <p className="text-gray-700">86—18126759566</p>
                </div>
                <div>
                  <p className="text-gray-500">Email:</p>
                  <p className="text-gray-700">info@volferda.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  